import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/User_auth.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [question, setQuestion] = useState("");

  //Making variable of useNavigate
  const navigate = useNavigate();

  // creating custom method for handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, phone, address);
    // toast.success("Register Successfully!");
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/forgot-password`,
        {
          email,
          newPassword,
          question,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Layout title={"Forgot | Password"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Reset-Password Form</h1>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter Your Email..."
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="form-control"
              id="exampleInputQuestion"
              placeholder="Enter Your Hobby..."
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Reset-Password
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
