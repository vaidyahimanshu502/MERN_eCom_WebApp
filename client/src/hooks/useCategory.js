import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //Get Category
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-categories`
      );
      setCategories(data?.categories);
    } catch (error) {
      console.log("Error in getting Categories!", error);
    }
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  return categories;
}
