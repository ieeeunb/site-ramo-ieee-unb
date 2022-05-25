import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => (props.gap ? props.gap : "1.5rem")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  flex-wrap: wrap;
  width: ${(props) => (props.width ? props.width : "auto")};
`;

export default Flex;
