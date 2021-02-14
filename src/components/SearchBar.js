import React, { useState } from "react";
import styled from "styled-components/macro";

export const SearchBar = ({ handleSearchSubmit }) => {
  const [searchValue, setsearchValue] = useState("");

  return (
    <SearchForm onSubmit={() => handleSearchSubmit(searchValue)}>
      <SearchInput
        type="text"
        value={searchValue}
        onChange={event => setsearchValue(event.target.value)}
        placeholder="Search for character..."
      />
      <SubmitButton>Search</SubmitButton>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const SearchInput = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: 2px solid #ffd700;
  height: 40px;
  width: 60%;
  color: #fff;
  font-size: 16px;

  ::placeholder {
    color: #fff;
    font-size: 16px;
    padding: 0;
  }
`;

const SubmitButton = styled.button`
  background: #fff;
  padding: 2px 4px;
  margin: 8px 0 4px 0;
  width: 100px;
  color: #000;
  border: 1px solid #fff;
  border-radius: 10px;
  outline: none;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background: #ffd700;
    border: 1px solid #ffd700;
  }
`;
