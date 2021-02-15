import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { CharacterCardWrapper, H3 } from "./CharacterCard";

export const FilmCard = ({ title, id }) => {
  return (
    <FilmCardWrapper>
      <FilmLink to={`/films/${id}`}>
        <H3>{title}</H3>
      </FilmLink>
    </FilmCardWrapper>
  );
};

const FilmCardWrapper = styled(CharacterCardWrapper)`
  @media (min-width: 1024px) {
    width: 33%;
    margin: 60px 60px;
  }
`;

const FilmLink = styled(Link)`
  text-decoration: none;
`;
