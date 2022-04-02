import * as React from "react";

import "normalize.css";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <Statistics />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
