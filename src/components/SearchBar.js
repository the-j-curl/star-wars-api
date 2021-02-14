import React, { useState } from "react";
import styled from "styled-components/macro";

import { Button } from "../pages/Home";

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
  margin-bottom: 10px;

  @media (min-width: 1024px) {
    justify-content: center;
  }
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

  @media (min-width: 768px) {
    width: 40%;
  }

  @media (min-width: 1024px) {
    width: 18%;
    margin: 0 30px;
  }
`;

const SubmitButton = styled(Button)`
  padding: 2px 4px;
  margin: 8px 0 4px 0;
  width: 100px;
  height: 28px;
  border-radius: 15px;
  font-size: 14px;
`;
