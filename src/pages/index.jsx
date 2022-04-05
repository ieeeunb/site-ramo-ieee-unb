import * as React from "react";

import "normalize.css";

import Layout from "src/components/Layout";
import Header from "src/components/Header";
import Hero from "src/components/Home/Hero";
import Footer from "src/components/Footer";
import Statistics from "src/components/Home/Statistics";

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
