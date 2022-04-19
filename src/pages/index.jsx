import * as React from "react";

import "normalize.css";
import "src/pages/index.css";

import Layout from "src/components/Layout";
import Header from "src/components/Header";
import Hero from "src/components/Home/Hero";
import Footer from "src/components/Footer";
import Statistics from "src/components/Home/Statistics";

import { getStatistics } from "src/services/statistics";

// markup
const IndexPage = () => {
  const [statistics, setStatistics] = React.useState([]);

  React.useEffect(() => {
    getStatistics().then((data) => {
      setStatistics(data.props.data);
    });
  }, []);

  return (
    <Layout>
      <div className="site">
        <Header />
        <div className="site-content">
          <Hero />
          <Statistics statistics={statistics} />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default IndexPage;
