import React from "react";
import styled from "@emotion/styled";

const ContenedorCotizacion = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Parrafo = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Precio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  if (Object.keys(resultado).length === 0) return null;

  // Extraigo los valores a mostrar
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;

  return (
    <ContenedorCotizacion>
      <Precio>
        El precio es: <span>{PRICE}</span>
      </Precio>
      <Parrafo>
        Precio más alto del día: <span>{HIGHDAY}</span>
      </Parrafo>
      <Parrafo>
        Precio más bajo del día: <span>{LOWDAY}</span>
      </Parrafo>
      <Parrafo>
        Variación últimas 24hrs: <span>{CHANGEPCT24HOUR}</span>
      </Parrafo>
      <Parrafo>
        Última actualización: <span>{LASTUPDATE}</span>
      </Parrafo>
    </ContenedorCotizacion>
  );
};

export default Cotizacion;
