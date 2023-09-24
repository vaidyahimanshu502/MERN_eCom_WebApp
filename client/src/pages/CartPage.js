import React from "react";
import Layout from "../components/layouts/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart([]);
  const [auth, setAuth] = useAuth("");
  const navigate = useNavigate();
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
          <div className="col-md-9">Cart Items</div>
          <div className="col-md-3">Checkout | Payment</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
