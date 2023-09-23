import React, { useState, useEffect } from "react";
import useCategory from "../hooks/useCategory";
import Layout from "../components/layouts/Layout";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All-Categories"}>
      <div className="container">
        <div className="row">
          {categories?.map((c) => (
            <div className="col-md-6">
              <Link
                to={`/category/${c.slug}`}
                className="btn btn-primary m-2"
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
