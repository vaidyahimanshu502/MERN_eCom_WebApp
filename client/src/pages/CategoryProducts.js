import React, { useState, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryProducts = () => {
  const params = useParams();
  const navigare = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState();

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log("Error in getting products by categories!", error);
    }
  };

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  return (
    <Layout title={"CategoryWise-Products"}>
      <div className="container">
        <h1 className="text-center mt-3">Category : {category?.name}</h1>
        <h4 className="text-center mt-3">Result-Found : {products?.length}</h4>
        <div className="home-card">
          {products?.map((p) => (
            <div
              className="card m-2 card-custom"
              style={{ width: "18rem" }}
              key={p._id}
            >
              <img
                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <h5 className="text-center">Rs.- {p.price} </h5>
                <div>
                  <button
                    className="btn btn-primary ms-1"
                    onClick={() => navigare(`/product/${p.slug}`)}
                  >
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
      </div>
    </Layout>
  );
};

export default CategoryProducts;
