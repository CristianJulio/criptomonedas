import React from "react";
import styled from "@emotion/styled";

const MensajeError = styled.p`
  background: #b7322c;
  padding: 1rem;
  color: #ffffff;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  font-family: "Bebas Neue", cursive;
`;

const Error = ({ mensaje }) => <MensajeError>{mensaje}</MensajeError>;

export default Error;
