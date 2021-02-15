import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import { Loader } from "../components/Loader";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";
import { H3 } from "../components/CharacterCard";

export const FilmDetails = () => {
  const { id } = useParams();
  const SINGLE_FILM_URL = `https://swapi.dev/api/films/${id}`;

  const [filmDetails, setFilmDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsLoading(true);
    fetch(SINGLE_FILM_URL)
      .then(res => res.json())
      .then(json => {
        setFilmDetails(json);
        setIsLoading(false);
      });
  }, [id, SINGLE_FILM_URL]);
  console.log(filmDetails);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header pageTitle="Film Details" />
          <BackButton history={history} />
          <MainWrapper>
            <FilmDetailsContainer>
              <H3>
                Episode: {filmDetails.episode_id} | {filmDetails.title}
              </H3>
              <FilmInfo>Released: {filmDetails.release_date}</FilmInfo>
              <FilmInfo>{filmDetails.opening_crawl}</FilmInfo>
              <FilmInfo>Directed by: {filmDetails.director}</FilmInfo>
              <FilmInfo>Produced by: {filmDetails.producer}</FilmInfo>
            </FilmDetailsContainer>
          </MainWrapper>
        </>
      )}
    </>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilmDetailsContainer = styled.article`
  margin: 10px 20px;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const FilmInfo = styled.p`
  font-size: 15px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
