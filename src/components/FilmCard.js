import React, { useState } from "react";
import styled from "styled-components/macro";

import {
  CharacterInfo,
  CharacterCardWrapper,
  H3,
  InfoText,
  ShowLessButton,
} from "./CharacterCard";

export const FilmCard = ({ title, episodeId, releaseDate }) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <FilmCardWrapper>
      {onClick && (
        <>
          <H3 onClick={() => setOnClick(!onClick)}>{title}</H3>
          <FilmInfo>
            <InfoText>Episode: {episodeId}</InfoText>
            <InfoText>Released: {releaseDate}</InfoText>
            <ShowLessButton onClick={() => setOnClick(!onClick)}>
              Show less
            </ShowLessButton>
          </FilmInfo>
        </>
      )}
      {!onClick && <H3 onClick={() => setOnClick(!onClick)}>{title}</H3>}
    </FilmCardWrapper>
  );
};

const FilmInfo = styled(CharacterInfo)``;

const FilmCardWrapper = styled(CharacterCardWrapper)`
  @media (min-width: 1024px) {
    width: 33%;
    margin: 60px 60px;
  }
`;
