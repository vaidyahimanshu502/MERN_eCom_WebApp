import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { Spinner } from "../Spinner";

export default function PrivateRoutes() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/user/user-auth`
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
    };
    if (auth?.token) checkAuth();
  }, [auth.token]);

  return ok ? <Outlet /> : <Spinner />;
}
