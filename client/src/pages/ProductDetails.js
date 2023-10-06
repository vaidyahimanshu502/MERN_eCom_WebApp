import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/Cart";

const ProductDetails = () => {
  // Variable for params
  const params = useParams();

  // State for holding produc
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);

  const [cart, setCart] = useCart([]);

  //Function for getting product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-single-product/${params.slug}`
      );
      //   console.log(data.product);
      setProduct(data?.product);
      setCategory(data?.product?.category);
      getSimilorProduct(data?.product._id, data?.product.category._id); // calling function here for givng pid and cid.
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

  // Get simmilor products
  const getSimilorProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/related-products/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log("Error in getting simmilor products!", error);
      toast.error("Something went wron in getting simmilor products!");
    }
  };

  return (
    <Layout>
      {/* {JSON.stringify(product, null, 4)} */}
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            style={{ height: "60vh", width: "35vw", marginLeft: "2vw" }}
            src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product-Details</h1>
          <h6>Name: {product.name}</h6>
          <h6>Category: {category.name}</h6>
          <h6>Price: Rs.-{product.price}</h6>
          <h6>Description: {product.description}</h6>
          <h6>In-Stock: {product.quantity}</h6>

          <button
            className="btn btn-secondary ms-1"
            onClick={() => {
              setCart([...cart, product]);
              // Storing items into localstorage
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
              toast.success(`${product.name} is added to cart!`);
            }}
          >
            Add-to-Cart
          </button>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <div className="col-md-12">
          <h4>Similar Products ➡️</h4>
          {/* <h4 className="text-center">Simmilor Products</h4> */}
          {relatedProducts?.length < 1 && (
            <p className="text-center">No Similor Product Found!</p>
          )}
          {/* {JSON.stringify(relatedProducts, null, 4)} */}
          <div className="d-flex flex-wrap">
            {relatedProducts?.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="text-center card-price">Rs.-{p.price}</h5>
                  </div>

                  <p className="card-text">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-secondary ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        // Storing items into localstorage
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success(`${p.name} is added to cart!`);
                      }}
                    >
                      Add-to-Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
