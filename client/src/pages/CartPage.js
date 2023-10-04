import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/auth";
import { Await, useNavigate } from "react-router-dom";

import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [cart, setCart] = useCart([]);
  const [auth] = useAuth("");
  const navigate = useNavigate();

  // States for BrainTree
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  // console.log("Instance of ----", instance);
  // console.log("Cart Items ", cart)
  // console.log("Client Token--", clientToken)

  //Method for removing item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      //removing from localStorage
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log("Error in deleting item!", error);
    }
  };

  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        const itemPrice = parseFloat(item.price);
        if (!isNaN(itemPrice)) {
          total += itemPrice;
        }
      });
      return total.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
      });
    } catch (error) {
      console.log("Error in calculating total!", error);
    }
  };

  // Getting payment getway Token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/token`
      );
      console.log("Client Token = ", data?.clientToken);
      setClientToken(data?.clientToken); // clientToken comes from API don't confuse with state's clientToken
    } catch (error) {
      console.log("Error in geting payment token ", error);
    }
  };

  // initialy getting token
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  // handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const userId = auth?.user?._id;
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/braintree/payment`,
        {
          nonce,
          cart,
          userId,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment-Complited Successfully!");
    } catch (error) {
      console.log("Error in making payment", error);
      setLoading(false);
    }
  };
  return (
    <Layout title={"Cart-Items"}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center bg-light">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h2>
            <h5 className="text-center">
              {cart?.length
                ? `You have ${cart.length} item in your cart! ${
                    auth?.token ? "" : "Please login to checkout!"
                  }`
                : "Your cart is empty!"}
            </h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              {cart?.map((p) => (
                <div className="row mb-2 p-2 card flex-row">
                  <div className="col-md-4">
                    <img
                      src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      height="200px"
                    />
                  </div>
                  <div className="col-md-4">
                    <h4>Name: {p.name}</h4>
                    <p>Description: {p.description}</p>
                    <h4>Price: RS.{p.price}</h4>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart-Summary</h2>
            <p>Total | Payment | Checkout</p>
            <hr />
            <h4>Total : {totalPrice()} </h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current-Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update-Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/dashboard/user/profile")}
                  >
                    Update-Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please LogIn To Check-Out
                  </button>
                )}
              </div>
            )}
            <div className="mt-2">
              {!clientToken || !auth?.token || !cart?.length ? (
                " "
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(newInstance) => {
                      // console.log("Instance is set:", newInstance);
                      setInstance(newInstance);
                    }}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing..." : "Make-Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
