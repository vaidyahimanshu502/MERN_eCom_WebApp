import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  // Variable for params
  const params = useParams();

  // State for holding produc
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");

  //Function for getting product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-single-product/${params.slug}`
      );
      console.log(data.product);
      setProduct(data?.product);
      setCategory(data?.product?.category);
      toast.success("More details of product-");
    } catch (error) {
      console.log("Error in geting product!", error);
      toast.error("Something went wrong in getting product!");
    }
  };

  // initial life cycle for calling function
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params.slug]);

  return (
    <Layout>
      {/* {JSON.stringify(product, null, 4)} */}
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            style={{ height: "60vh", width: "35vw", marginLeft: "2vw" }}
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product-Details</h1>
          <h4>Name: {product.name}</h4>
          <h6>Category: {category.name}</h6>
          <h6>Price: Rs.-{product.price}</h6>
          <h6>Description: {product.description}</h6>
          <h6>In-Stock: {product.quantity}</h6>

          <button className="btn btn-secondary ms-1">Add-to-Cart</button>
        </div>
      </div>
      <div className="row container">Similar products</div>
    </Layout>
  );
};

export default ProductDetails;
