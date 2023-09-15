import React from "react";
import Layout from "../components/layouts/Layout";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();
  //   const resultLength = values.result ? values.result.length : 0;
  //   console.log(resultLength);
  console.log(values);
  console.log("Arrays of products", values.result);
  return (
    <Layout title={"Searched-result"}>
      <div className="container">
        <div className="text-center">
          <h1>Search-Results</h1>
          <h6>
            {values?.result.length < 1
              ? "No products founds"
              : `Found- ${values?.result.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {/* checking before maping */}
            {values.result.results &&
              values.result.results.map((p) => (
                <div
                  className="card m-2"
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
        </div>
      </div>
    </Layout>
  );
};

export default Search;
