import React from "react";
import styled from "styled-components";
import diamond from "../../assets/diamond.svg";
import orange from "../../assets/diamond-orange.svg";
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-image: ${(props) =>
    props.variant === "orange" ? `url(${orange})` : `url(${diamond})`};
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 3rem 4rem;
`;

const Inside = styled.div`
  text-align: center;
  h1 {
    color: #303b42;
    font-size: ${(props) => (props?.title?.length > 10 ? "0.7rem" : "1.06rem")};
    font-weight: bold;
    padding: 0 0.5rem;
    height: 41px;
    margin: 0;
  }

  h2 {
    color: ${(props) => (props?.variant === "orange" ? "white" : "#FF8040")};
    font-size: 3rem;
    margin: 0;
    line-height: 2.5rem;
  }
`;

const Diamond = (props) => {
  return (
    <Wrapper variant={props?.variant}>
      <Inside variant={props?.variant} title={props?.data?.title}>
        <h1>{props?.data?.title}</h1>
        <h2>{props?.data?.value}</h2>
      </Inside>
    </Wrapper>
  );
};
export default Diamond;
