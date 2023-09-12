import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";

import { toast } from "react-hot-toast";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { prices } from "../components/Prices";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);

  // states for paginations
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  // states for loading the page
  const [loading, setLoading] = useState(false);

  //Get categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-categories`
      );
      if (data?.success) {
        setCategories(data?.categories);
      }
    } catch (error) {
      console.log("Error in getting Category!");
    }
  };

  //for initial life cycle
  useEffect(() => {
    getAllCategory();
  }, []);

  // getting all products
  const getAllProducts = async () => {
    try {
      // Handling paginations
      setLoading(true);
      // const { data } = await axios.get(
      //   `${process.env.REACT_APP_API}/api/v1/product/get-product`
      // );

      // now
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      if (data?.success) {
        setLoading(false);
        setProducts(data.products);
      }
    } catch (error) {
      setLoading(false);
      console.log("Error in getting all producs!");
      toast.error("Something went wrong in gett all products!");
    }
  };

  // console.log("Products=====", products);

  // Applying filter by categories
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    console.log(all);
    setChecked(all);
  };

  // Handle filter operation
  const filterProduct = async () => {
    try {
      console.log(
        "Filtering products with checked:",
        checked,
        "and radio:",
        radio
      );
      const { data } = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/product/product-filter`,
        {
          checked,
          radio,
        }
      );
      setProducts(data?.products);
    } catch (error) {
      console.log("Error in filtering the products!", error);
      toast.error("Error in filtering the products!");
    }
  };

  //initial life cycle of products
  useEffect(() => {
    if (!checked.length || radio.length) getAllProducts();
    //eslint-disable-next-line
  }, [checked.length, radio.length]);

  // For rendering Filtered Products
  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  // get total count of products
  const getTotal = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-count`
      );
      setTotal(data?.total);
    } catch (error) {
      console.log("error in getting count of total products!");
      toast.error("Something went wrong in counting the products!");
    }
  };

  useEffect(() => {
    getTotal();
  }, []);

  // load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log("Error in loading more pages!", error);
      toast.error("Something went wrong in loading the page!");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  return (
    <Layout title={"All-Products | Best Offers"}>
      <div className="row mt-3">
        <div className="col-md-2 d-flex flex-column">
          <h5 className="text-center">Filter By Category</h5>
          {categories?.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleFilter(e.target.checked, c._id)}
              className="m-1"
            >
              {c.name}
            </Checkbox>
          ))}

          {/* Filter by prices */}
          <h5 className="text-center mt-3">Filter By Price</h5>
          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
            {prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}>{p.name}</Radio>
              </div>
            ))}
          </Radio.Group>
          <div className="d-flex flex-column mt-3">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              Reset-Filters
            </button>
          </div>
        </div>
        <div className="col-md-10">
          <h3 className="text-center">All Products</h3>
          {/* for test purpose only */}
          {/* {JSON.stringify(checked, null, 4)} 
          {JSON.stringify(radio, null, 4)} */}

          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <h5 className="text-center">Rs.- {p.price} </h5>
                  <div>
                    <button className="btn btn-primary ms-1">
                      More-Details
                    </button>
                    <button className="btn btn-secondary ms-1">
                      Add-to-Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-2">
            {products && products.length < total && (
              <button
                className="btn btn-warning"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "loading..." : "Load-More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
