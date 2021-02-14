import React, { useState } from "react";
import styled from "styled-components/macro";

import { Button } from "../pages/Home";

export const CharacterCard = ({ name, gender, birthYear, height }) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <CharacterCardWrapper>
      {onClick && (
        <>
          <H3 onClick={() => setOnClick(!onClick)}>{name}</H3>
          <CharacterInfo>
            <InfoText>Gender: {gender}</InfoText>
            <InfoText>Birth year: {birthYear}</InfoText>
            <InfoText>Height: {height}cm</InfoText>
            <ShowLessButton onClick={() => setOnClick(!onClick)}>
              Show less
            </ShowLessButton>
          </CharacterInfo>
        </>
      )}
      {!onClick && <H3 onClick={() => setOnClick(!onClick)}>{name}</H3>}
    </CharacterCardWrapper>
  );
};

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CharacterCardWrapper = styled.article`
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

  @media (min-width: 768px) {
    width: 40%;
    margin: 10px 10px;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const H3 = styled.h3`
  color: #ffd700;
  margin: 6px 0;
  border-bottom: 1px solid transparent;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid #ffd700;
    transition: all 0.3s ease-in;
  }
`;

export const InfoText = styled.p`
  margin: 4px 0;
`;

export const ShowLessButton = styled(Button)`
  padding: 2px 4px;
  margin: 8px 0 4px 0;
  width: 100px;
  height: 26px;
  border-radius: 16px;
  font-size: 12px;
`;
