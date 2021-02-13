import React from "react";
import styled from "styled-components/macro";

export const CharacterCard = ({ name, gender, birthYear, height }) => {
  return (
    <CharacterCardWrapper>
      <H3>{name}</H3>
      <CharacterInfo>
        <InfoText>Gender: {gender}</InfoText>
        <InfoText>Birth year: {birthYear}</InfoText>
        <InfoText>Height: {height}cm</InfoText>
      </CharacterInfo>
    </CharacterCardWrapper>
  );
};

const CharacterInfo = styled.div`
  display: none;
`;

const CharacterCardWrapper = styled.article`
  border: 2px solid #ffd700;
  width: 90%;
  max-width: 400px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  border-radius: 2%;
  box-shadow: 4px 4px 8px 4px #ffd700;

  :hover ${CharacterInfo} {
    display: block;
  }

  @media (min-width: 768px) {
    width: 40%;
    margin: 10px 10px;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

const H3 = styled.h3`
  color: #ffd700;
`;

const InfoText = styled.p`
  margin: 10px 0;
`;
