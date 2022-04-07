import React, { useEffect, useLayoutEffect } from "react";
import useFetch from "use-http";
import Container from "../Layout/Container";
import Diamond from "../Layout/Diamond";
import Flex from "../Layout/Flex";
import { useState } from "react";

import styled from "styled-components";

const Statistics = (props) => {

	return (
			<Container color="rgba(48, 59, 66, 0.05)">
					<Flex justify="center" gap="3rem">
							{props.statistics.map((statistic) => (
									<Diamond
											key={statistic.id}
											variant={statistic.attributes.variant}
											data={statistic.attributes}
									></Diamond>
							))}
					</Flex>
			</Container>
	);

};

export default Statistics;
