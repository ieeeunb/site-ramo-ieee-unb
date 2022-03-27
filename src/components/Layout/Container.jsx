import styled from "styled-components";

const Container = styled.div`
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  background-color: ${(props) => (props.color ? props.color : "white")};
`;
export default Container;
