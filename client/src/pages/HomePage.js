import React from "react";
import Layout from "../components/layouts/Layout";
import { useAuth } from "../context/auth";

function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home-Page"}>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
}

export default HomePage;
