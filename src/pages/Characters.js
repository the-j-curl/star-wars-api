import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { Loader } from "../components/Loader";
import { CharacterCard } from "../components/CharacterCard";
import { BackButton } from "../components/BackButton";
import { SearchBar } from "components/SearchBar";

export const Characters = () => {
  // const PEOPLE_URL = "https://swapi.dev/api/people";
  const [peopleURL, setPeopleURL] = useState(
    "https://swapi.dev/api/people/?page=1"
  );
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  useEffect(() => {
    characterFetch(peopleURL);
    // eslint-disable-next-line
  }, [peopleURL]);

  const characterSearch = searchText => {
    if (searchText === "") {
      setPeopleURL("https://swapi.dev/api/people/?page=1");
      characterFetch(peopleURL);
    } else {
      setIsLoading(true);
      fetch(`https://swapi.dev/api/people/?search=${searchText}`)
        .then(res => res.json())
        .then(json => {
          setCharacters(json.results);
          setIsLoading(false);
        });
    }
  };

  const characterFetch = peopleURL => {
    setIsLoading(true);
    fetch(peopleURL)
      .then(res => res.json())
      .then(json => {
        setCharacters(characters.concat(json.results));
        const nextPage = json.next;
        if (nextPage) {
          setPeopleURL(nextPage);
        }
        setIsLoading(false);
      });
  };

  // const searchCharacter = searchInput => {
  //   // event.preventDefault();
  //   setSearchText(searchInput);
  //   console.log(`search text: ${searchText}`);
  // };
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <H2>Characters</H2>
          <BackButton history={history} />
          <SearchBar handleSearchSubmit={characterSearch} />
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

const H2 = styled.h2`
  font-size: 20px;
`;
