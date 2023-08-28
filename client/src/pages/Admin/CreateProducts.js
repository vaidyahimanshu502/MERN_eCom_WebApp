import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import AdminMenu from "../../components/layouts/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import { Select } from "antd";

//destructuring Options from Select
const { Option } = Select;

const CreateProducts = () => {
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantiy] = useState("");
  const [shipping, setShipping] = useState("");

  //Get categories
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/all-categories`
      );
      // console.log(data?.categories)
      if (data?.success) {
        setCategories(data?.categories);
        toast.success(data.message);
      } else {
        toast.error(data.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong in getting category!!");
    }
  };

  //for initial life cycle
  useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <Layout title={"Create | Products"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="div m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a Category"
                size="large"
                showSearch
                className="form-select mb-3"
                // onChange={(value) => {
                //   setCategories(value);
                // }}
                onChange={(value) => {
                  setCategory(value); // Update the correct state variable
                }}
              >
                {categories?.map((category) => {
                  // console.log(categories);
                  return (
                    <Option key={category._id} value={category.name}>
                      {category.name}
                    </Option>
                  );
                })}
              </Select>
              {/* For uploading photo */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => {
                      setPhoto(e.target.files[0]);
                    }}
                    hidden
                  />
                </label>
              </div>
              {/* for setting preview */}
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)} // getting photo from URL
                      alt="product-photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              {/* For taking more fields */}
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Write a name"
                  className="form-control"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Write Description"
                  className="form-control"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Write a price"
                  className="form-control"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Write Quantiy"
                  className="form-control"
                  onChange={(e) => {
                    setQuantiy(e.target.value);
                  }}
                />
              </div>
              <Select
                bordered={false}
                placeholder="Select a Shipping"
                size="large"
                showSearch
                className="form-select mb-3"
                // onChange={(value) => {
                //   setCategories(value);
                // }}
                onChange={(value) => {
                  setShipping(value); // Update the correct state variable
                }}
              >
                <>
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </>
              </Select>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary">Create-Product</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProducts;
