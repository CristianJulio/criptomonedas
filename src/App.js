import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import imagen from "./cryptomonedas.png";
import Formulario from "./components/Formulario";
import Axios from "axios";
import Cotizacion from "./components/Cotizacion";
import Spinner from "./components/Spinner";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #ffffff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background: #66a2fe;
    display: block;
  }
`;

const App = () => {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (moneda === "") return;
    const consultarApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await Axios.get(url);
      setCargando(true);

      setTimeout(() => {
        setCargando(false);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    };
    consultarApi();
  }, [moneda, criptomoneda]);

  const componente = cargando ? (
    <Spinner />
  ) : (
    <Cotizacion resultado={resultado} />
  );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="imagen criptomoneda" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario setMoneda={setMoneda} setCriptomoneda={setCriptomoneda} />
        {componente}
      </div>
    </Contenedor>
  );
};

export default App;
