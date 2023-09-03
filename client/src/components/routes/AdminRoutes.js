import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../Spinner";
import { toast } from "react-hot-toast";

export default function AdminRoutes() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/user/admin-auth`
        );
        // {
        //   headers: {
        //     Authorization: auth?.token,
        //   },
        // }
        //  );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          toast.error("Unauthorized Access!");
        }
      }
    };
    if (auth?.token) checkAuth();
  }, [auth.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
