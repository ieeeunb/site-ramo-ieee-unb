import React, { useLayoutEffect } from "react";
import useFetch from "use-http";
import Container from "./Layout/Container";
import Diamond from "./Layout/Diamond";
import Flex from "./Layout/Flex";
import styled from "styled-components";
import { useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL;

const Statistics = () => {
  const [statistics, setStatistics] = useState([]);
  const { get, response, loading, error } = useFetch(apiUrl);

  useLayoutEffect(() => {
    const getStatistics = async () => {
      await get("/statistics");
      if (response.ok) {
        setStatistics(response.data.data);
      }
    };
    getStatistics();
  }, []);

  return (
    <Container color="rgba(48, 59, 66, 0.05)">
      <Flex justify="center" gap="3rem">
        {statistics.map((statistic) => (
          <Diamond
            variant={statistic.attributes.variant}
            data={statistic.attributes}
          ></Diamond>
        ))}
      </Flex>
    </Container>
  );
};

export default Statistics;
