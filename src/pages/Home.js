import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Star Wars api</h1>
      <Link to="/characters">
        <h3>Characters</h3>
      </Link>
    </>
  );
};
