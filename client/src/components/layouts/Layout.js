import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

function Layout({ children, title, description, keywords, author }) {
  return (
    <div>
      {/* <h1>Layout</h1> */}
      <Header />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "70vh" }}>
        {/* To showing children of layout we have to access it by props */}
        {/* <ToastContainer /> */}
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
}

// Setting default SEO
Layout.defaultProps = {
  title: "Ecommerce-WebApp - Shop now",
  description: "MERN Full Stack Project",
  keywords: "MERN, React, Node, MongoDB",
  author: "Himanshu Vaidya",
};

export default Layout;
