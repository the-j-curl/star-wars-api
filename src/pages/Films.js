import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Loader } from "../components/Loader";
import { Header } from "../components/Header";
import { BackButton } from "../components/BackButton";
import { FilmCard } from "../components/FilmCard";
import { MainWrapper } from "./Characters";

export const Films = () => {
  const FILMS_URL = "https://swapi.dev/api/films/?page=1";

  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    filmFetch();
  }, []);

  const filmFetch = () => {
    setIsLoading(true);
    fetch(FILMS_URL)
      .then(res => res.json())
      .then(json => {
        setFilms(json.results);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header pageTitle="Films" />
          <BackButton history={history} />
          <MainWrapper>
            {films.map((film, index) => (
              <FilmCard
                key={film.title}
                id={index + 1}
                title={film.title}
                episodeId={film.episode_id}
                releaseDate={film.release_date}
                filmDescription={film.opening_crawl}
              />
            ))}
          </MainWrapper>
        </>
      )}
    </>
  );
};
