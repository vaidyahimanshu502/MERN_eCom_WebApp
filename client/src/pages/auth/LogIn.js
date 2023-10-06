import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/User_auth.css";
import { useAuth } from "../../context/auth";

function LogIn() {
  // creating states for form data.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  //Making variable of useNavigate
  const navigate = useNavigate();
  const location = useLocation();

  // creating custom method for handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email, password, phone, address);
    // toast.success("Register Successfully!");
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/user/login`,
        {
          email,
          password,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };
  return (
    <Layout title={"Sign-In | Ecom-WebApp"}>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Log-In Form</h1>

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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Your Password..."
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LogIn
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot-Password?
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default LogIn;
