import React, { useState } from "react";
import styled from "styled-components/macro";

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

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 6px 0;
  border-bottom: 1px solid transparent;
  :hover {
    cursor: pointer;
    border-bottom: 1px solid #ffd700;
    transition: all 0.3s ease-in;
  }
`;

const InfoText = styled.p`
  margin: 4px 0;
`;

const ShowLessButton = styled.button`
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
