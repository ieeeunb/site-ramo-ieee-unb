import * as React from 'react';

import 'src/pages/index.css';

import Layout from "src/components/Layout";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

const ArticlePage = (props) => {
  console.log(props);
  return(
    <Layout>
      <div className="site">
        <Header />
        <div className="site-content">
          <h1>Página de posts</h1>
        </div>
        <Footer />
      </div>
    </Layout>
  );
}

export default ArticlePage;