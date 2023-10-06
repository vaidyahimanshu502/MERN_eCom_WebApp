import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All-Categories"}>
      <div className="container cat-cantainer">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6">
              <Link
                to={`/category/${c.slug}`}
                className="cat-btn"
                key={c._id}
              >
                {c.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
