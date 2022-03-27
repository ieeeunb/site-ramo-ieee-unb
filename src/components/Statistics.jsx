import React from "react";
import Container from "./Layout/Container";
import Diamond from "./Layout/Diamond";
import Flex from "./Layout/Flex";
import styled from "styled-components";

const mock = [
  {
    title: "Membros",
    value: "99999",
    variant: "orange",
  },
  {
    title: "Atividades por ano",
    value: "100",
    variant: "primary",
  },
  {
    title: "Docentes envolvidos",
    value: "020",
    variant: "primary",
  },
  {
    title: "Pessoas impactadas em 2022",
    value: "1000",
    variant: "primary",
  },
];

const Statistics = () => {
  return (
    <Container color="rgba(48, 59, 66, 0.05)">
      <Flex justify="center" gap="3rem">
        {mock.map((statistic) => (
          <Diamond variant={statistic.variant} data={statistic}></Diamond>
        ))}
      </Flex>
    </Container>
  );
};

export default Statistics;
