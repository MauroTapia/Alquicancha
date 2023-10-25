import React from "react";
import {
  ButtonSearch,
  DateForm,
  LupaImg,
  SearchInput,
  SearchWrapper,
} from "./search.style";
import lupa from "../../assets/lupa1.svg";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="Busca aquí la cancha que necesitas"
        />
        <div style={{display:"flex", gap:5}}>
          <DateForm>
            <label htmlFor="start">Desde:</label>
            <input type="date" id="start" />
          </DateForm>
          <DateForm>
            <label htmlFor="end">Hasta:</label>
            <input type="date" id="end" />
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
