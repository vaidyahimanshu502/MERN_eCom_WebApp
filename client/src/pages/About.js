import React from "react";
import Layout from "../components/layouts/Layout";

function About() {
  return (
    <Layout title={"About Us - Ecom-WebApp"}>
      <div className="row contactus">
        <div className="col-md-6 img-cont">
          <img
            className="contact-img"
            src="/images/about.jpg"
            alt="contact-us"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-5 text-cont about-text">
          <h1 className="bg-dark p-2 text-white text-center">About</h1>
          <p className="text-justify mt-2">
            At [Website Name], we are passionate about bringing you the best
            online shopping experience. Our mission is to provide a diverse
            range of high-quality products at affordable prices, all while
            delivering exceptional customer service.
          </p>
          <p className="text-justify mt-2">
            Our Story: [Website Name] was founded with the vision of creating a
            one-stop destination for all your shopping needs. Our journey began
            [X years ago], and since then, we have grown into a trusted
            e-commerce platform serving customers worldwide.
          </p>
          <p className="text-justify mt-2">
            Join Our Community: We believe in building a vibrant and engaged
            community of shoppers. Be part of our social media channels and
            newsletter to stay updated on the latest deals, promotions, and
            exclusive offers.
          </p>
          <p className="text-justify mt-2">
            Thank you for choosing [Website Name] as your preferred online
            shopping destination. We look forward to serving you and making your
            shopping experience truly delightful!
          </p>
          <p className="text-justify mt-2">Happy Shopping!</p>
        </div>
      </div>
    </Layout>
  );
}

export default About;
