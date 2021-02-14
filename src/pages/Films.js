import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Loader } from "../components/Loader";
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
    // console.log(films);
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
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <h2>Films</h2>
          <BackButton history={history} />
          <MainWrapper>
            {films.map(film => (
              <FilmCard
                key={film.title}
                title={film.title}
                episodeId={film.episode_id}
                releaseDate={film.release_date}
              />
            ))}
          </MainWrapper>
        </>
      )}
    </>
  );
};
