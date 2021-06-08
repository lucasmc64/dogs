import React from "react";
import styled from "styled-components";

const Message = styled.p`
  color: #f31;
  margin: 1rem 0;
`;

const Error = ({ error }) => {
  if (!error) return null;

  return <Message>{error}</Message>;
};

export default Error;
