import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';

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

Error.propTypes = {
  mensaje: PropTypes.string.isRequired
}

export default Error;
