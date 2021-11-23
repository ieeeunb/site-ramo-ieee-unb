import * as React from "react";

import "normalize.css";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
