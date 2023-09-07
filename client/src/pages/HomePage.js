import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/auth";
import { toast } from "react-hot-toast";
import axios from "axios";

function HomePage() {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // getting all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-product`
      );
      if (data?.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log("Error in getting all producs!");
      toast.error("Something went wrong in gett all products!");
    }
  };
  //initial life cycle of products
  useEffect(() => {
    getAllProducts();
  }, []);
  console.log("Products=====", products);
  return (
    <Layout title={"All-Products | Best Offers"}>
      <div className="row mt-3">
        <div className="col-md-3">
          <h5 className="text-center">Filter By Category</h5>
        </div>
        <div className="col-md-9">
          <h3 className="text-center">All Products</h3>

          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <button class="btn btn-primary ms-1">More-Details</button>
                  <button class="btn btn-secondary ms-1">Add-to-Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
