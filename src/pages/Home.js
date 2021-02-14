import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const Home = () => {
  return (
    <HomeWrapper>
      <StarWarsLogo src="../images/star-wars-logo.png" />
      <ButtonWrapper>
        <Link to="/characters">
          <Button>Characters</Button>
        </Link>
        <Link to="/films">
          <Button>Films</Button>
        </Link>
      </ButtonWrapper>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StarWarsLogo = styled.img`
  width: 95%;
  max-width: 460px;

  @media (min-width: 1024px) {
    width: 500px;
    max-width: unset;
  }
`;

export const Button = styled.button`
  background: #fff;
  padding: 2px 4px;
  margin: 12px 0;
  width: 150px;
  height: 40px;
  color: #000;
  border: 1px solid #fff;
  border-radius: 20px;
  outline: none;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background: #ffd700;
    border: 1px solid #ffd700;
  }

  @media (min-width: 1024px) {
    margin: 14px 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;
