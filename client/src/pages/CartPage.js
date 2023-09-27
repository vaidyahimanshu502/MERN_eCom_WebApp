import React from "react";
import Layout from "../components/layouts/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart([]);
  const [auth, setAuth] = useAuth("");
  const navigate = useNavigate();

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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
