import React, { useState, useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import UserMenu from "../../components/layouts/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  // Getting all orders
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/user/orders`
      );
      console.log(data);
      setOrders(data?.orders);
    } catch (error) {
      console.log("Error in getting orders - ", error);
    }
  };

  //Initial life cycle
  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);
  return (
    <Layout title={"User's | Order"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {/* <p>{JSON.stringify(orders, null, 4)}</p> */}
            {Array.isArray(orders) && orders.length > 0 ? (
              orders?.map((order, index) => {
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <td scope="col"></td>
                          <td scope="col">Status</td>
                          <td scope="col">Buyer</td>
                          <td scope="col">Order</td>
                          <td scope="col">Payment</td>
                          <td scope="col">Quantity</td>
                        </tr>
                      </thead>
                    </table>
                  </div>
                );
              })
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
