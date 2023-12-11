import React, { useContext, useEffect, useState } from "react";
import {
  ButtonSearch,
  DateForm,
  LupaImg,
  SearchInput,
  SearchWrapper,
  Label,
  Input,
} from "./search.style";
import lupa from "../../assets/lupa1.svg";
import { obtenerFechaActual } from "../../utils/get-fecha-actual";
import { ContextGlobal } from "../../context/context";

const Search = () => {

  const { productos, allProducts, setProductData } =
  useContext(ContextGlobal).contextValue;

  const fechaActual = obtenerFechaActual();

  // Calcula la fecha mínima para endDate (dos días después de la fecha actual)
  const fechaMinimaEnd = new Date();
  fechaMinimaEnd.setDate(fechaMinimaEnd.getDate() + 2);
  const fechaMinimaEndFormato = fechaMinimaEnd.toISOString().split("T")[0];

  const [search, setSearch] = useState("");
  const [initDate, setInitDate] = useState(fechaActual);
  const [endDate, setEndDate] = useState("");
  const [endDateMin, setEndDateMin] = useState('');

  const [filtro, setFiltro] = useState(''); // Estado local para el filtro
  const [resultados, setResultados] = useState(allProducts); // Estado local para almacenar los resultados filtrados

  useEffect(()=>{
    setProductData(allProducts);
  },[]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setFiltro(search.toLowerCase());

    const resultadosFiltrados = allProducts.filter((objeto) =>
      objeto.titulo.toLowerCase().includes(filtro)
    );

    setResultados(resultadosFiltrados);
    if(e.target.value == ''){
      setProductData(allProducts);
      return;
    }
    setProductData(resultadosFiltrados);
  };

  const handleInitChangeFecha = (e) => {
    const selectedDate = e.target.value;
    setInitDate(selectedDate);

    const fechaSeleccionada = new Date(selectedDate);
    fechaSeleccionada.setDate(fechaSeleccionada.getDate() + 2);
    const nuevaFechaEnd = fechaSeleccionada.toISOString().split("T")[0];
    setEndDate(nuevaFechaEnd);
    setEndDateMin(nuevaFechaEnd);
  };

  const handleEndChangeFecha = (e) => {
    setEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("desde: ", initDate);
    console.log("hasta: ", endDate);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Busca aquí lo que necesitas"
          value={search}
          onChange={handleInputChange}
        />

        <div style={{ display: "flex", gap: 5 }}>
          <DateForm>
            <Label htmlFor="start">Desde: </Label>
            <Input
              type="date"
              id="start"
              value={initDate}
              onChange={handleInitChangeFecha}
              min={fechaActual}
            />
          </DateForm>
          <DateForm>
            <Label htmlFor="end">Hasta:</Label>
            <Input
              type="date"
              id="end"
              value={endDate}
              onChange={handleEndChangeFecha}
              min={endDateMin}
            />
          </DateForm>
          <ButtonSearch type="submit">
            <LupaImg src={lupa} alt="" />
          </ButtonSearch>
        </div>
      </SearchWrapper>
    </form>
  );
};

export default Search;
