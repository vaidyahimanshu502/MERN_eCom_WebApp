import React, { useState, useEffect } from "react";
import Layout from "../../components/layouts/Layout";
import UserMenu from "../../components/layouts/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  // Getting all orders
  const getOrders = async () => {
    try {
      const userId = auth?.user?._id;
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/user/orders/${userId}`
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
                console.log(order.buyer);
                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Order-Time</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{order.status}</td>
                          <ttd>{order?.buyer?.name}</ttd>
                          <td>{moment(order?.createAt).fromNow()}</td>
                          <td>
                            {order?.payment.success ? "Success" : "Failed"}
                          </td>
                          <td>{order?.products.length}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="container">
                      {order?.products?.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p._id}>
                          <div className="col-md-4">
                            <img
                              src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                              width={"100px"}
                              height={"100px"}
                            />
                          </div>
                          <div className="col-md-8">
                            <p>{p.name}</p>
                            <p>{p.description.substring(0, 30)}</p>
                            <p>Price: {p.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
