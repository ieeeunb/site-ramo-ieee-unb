import React, { useState } from "react";
import styled, { css } from "styled-components";

const Message = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8em;
  width: 50%;
`;

const Category = styled.span`
  font-size: 2em;
  color: #319cdd;
`;

const Title = styled.span`
  font-size: 2em;
  font-weight: 500;
`;

const Separator = styled.div`
  margin-top: 1em;
  background-color: #319cdd;
  height: 0.5em;
  width: 15%;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
  font-weight: normal;
  margin: 0;
`;

const Abstract = (props) => {
  return (
    <Message>
      <Category>IEEE DAY</Category>
      <Title>
        Alguma notícia ou algo que o ramo/capítulos estão promovendo
      </Title>
      <Separator />
      <SubTitle>Resumo etc. É sobre o que está em destaque no cículo</SubTitle>
    </Message>
  );
};

export default Abstract;
