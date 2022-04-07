import * as React from "react";

import "normalize.css";

import Layout from "src/components/Layout";
import Header from "src/components/Header";
import Hero from "src/components/Home/Hero";
import Footer from "src/components/Footer";
import Statistics from "src/components/Home/Statistics";

import { getStatistics } from "../services/statistics";

// markup
const IndexPage = () => {

	const [statistics, setStatistics] = React.useState([]);
	
	React.useEffect(() => {
		getStatistics()
		.then((data) => {
			setStatistics(data.props.data);
		})
	}, [])

	return (
			<Layout>
					<Header />
					<Hero />
					<Statistics 
						statistics={statistics}
					/>
					<Footer />
			</Layout>
	);
};

export default IndexPage;
