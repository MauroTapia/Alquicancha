import React from "react";
import {
  ButtonSearch,
  DateForm,
  LupaImg,
  SearchInput,
  SearchWrapper,
  Label,
  Input 
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
            <Label htmlFor="start">Desde: </Label>
            <Input type="date" id="start" />
          </DateForm>
          <DateForm>
            <Label htmlFor="end">Hasta:</Label>
            <Input type="date" id="end" />
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
