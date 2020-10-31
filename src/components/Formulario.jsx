import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import axios from "axios";
import Error from "./Error";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background: #66a2fe;
  border: none;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  color: #ffffff;
  transition: all 0.3s;

  &:hover {
    background: #326ac0;
  }
`;

const Formulario = ({ setMoneda, setCriptomoneda }) => {
  const [listaCriptomonedas, setListaCriptomonedas] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "COP", nombre: "Peso Colombiano" },
    { codigo: "MNX", nombre: "Peso Mexicano" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
  ];

  // Utilizar CustomHooks
  const [moneda, SelectMoneda] = useMoneda("Elige tu moneda", "", MONEDAS);
  const [criptoMoneda, SelectCripto] = useCriptomoneda(
    "Elige tu criptomoneda",
    "",
    listaCriptomonedas
  );

  // Llamado a la API
  useEffect(() => {
    const consultarApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      setListaCriptomonedas(resultado.data.Data);
    };
    consultarApi();
  }, []);

  // Manejar el submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (moneda === "" || criptoMoneda === "") {
      setError(true);
      return;
    }

    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptoMoneda);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

export default Formulario;
