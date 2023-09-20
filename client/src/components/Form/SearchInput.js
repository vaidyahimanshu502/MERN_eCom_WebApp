import React from "react";
import { useSearch } from "../../context/Search";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [values, setValues] = useSearch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/search-product/${values.keyword}`
      );
      //   setValues({ ...values, result: data });
      if (data?.success) {
        //corrected one code
        setValues((prevValues) => ({
          ...prevValues,
          result: data,
        }));
        navigate("/search");
        toast.success("Loading......");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log("Error in searching...", error);
    }
  };
  return (
    <div className="search-box">
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
        />
        <button
          className="btn btn-outline-success"
          style={{ color: "white", border: "2px solid white" }}
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
