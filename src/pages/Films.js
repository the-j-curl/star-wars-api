import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { BackButton } from "../components/BackButton";

export const Films = () => {
  const FILMS_URL = "https://swapi.dev/api/films";

  const [films, setFilms] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(FILMS_URL)
      .then(res => res.json())
      .then(json => {
        setFilms(json.results);
      });
    console.log(films);
  });

  return (
    <>
      <h2>Films</h2>
      <BackButton history={history} />
      <p>{films.title}</p>
    </>
  );
};
