import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { Loader } from "../components/Loader";
import { CharacterCard } from "../components/CharacterCard";
import { BackButton } from "../components/BackButton";

export const Characters = () => {
  const PEOPLE_URL = "https://swapi.dev/api/people";
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch(PEOPLE_URL)
      .then(res => res.json())
      .then(json => {
        setCharacters(json.results);
        setIsLoading(false);
      });
    console.log(characters);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <H2>Characters</H2>
          <BackButton history={history} />
          <MainWrapper>
            {characters.map(character => (
              <CharacterCard
                key={character.name}
                name={character.name}
                gender={character.gender}
                birthYear={character.birth_year}
                height={character.height}
              />
            ))}
          </MainWrapper>
        </>
      )}
    </>
  );
};

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const H2 = styled.h2``;
