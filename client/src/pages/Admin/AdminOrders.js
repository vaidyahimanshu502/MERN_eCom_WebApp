import React, { useState, useEffect } from "react";
import AdminManu from "../../components/layouts/AdminMenu";
import Layout from "../../components/layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";

//Destructuring from Select
const { Option } = Select;

const AdminOrders = () => {
  // States
  const [status, setStatus] = useState([
    "Not process",
    "Processing",
    "Shiped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");

  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  // Getting all orders
  const getOrders = async () => {
    try {
      const userId = auth?.user?._id;
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/user/all-orders`
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

  // Changing Status
  const handleChangeStatus = async (orderId, value) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/user/order-status/${orderId}`,
        { status: value }
      );
      getOrders();
    } catch (error) {
      console.log("Error in changing the Staus.-", error);
    }
  };

  return (
    <Layout title={"All | Orders"}>
      <div className="row">
        <div className="col-md-3">
          <AdminManu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All-Orders</h1>
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
                        <td>
                          <Select
                            bordered={false}
                            onChange={(value) =>
                              handleChangeStatus(order?._id, value)
                            }
                            defaultValue={order?.status}
                          >
                            {status?.map((s, i) => (
                              <Option key={i} value={s}>
                                {s}
                              </Option>
                            ))}
                          </Select>
                        </td>
                        <ttd>{order?.buyer?.name}</ttd>
                        <td>{moment(order?.createAt).fromNow()}</td>
                        <td>{order?.payment.success ? "Success" : "Failed"}</td>
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
                          <p>{p.description}</p>
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
    </Layout>
  );
};

export default AdminOrders;
