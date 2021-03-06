import React from "react";
import styled from "styled-components";

export const BackButton = ({ history }) => {
  return (
    <Button
      onClick={() => {
        history.goBack();
      }}
      type="button"
    >
      <LeftArrow></LeftArrow>
      <BackButtonText>Back</BackButtonText>
    </Button>
  );
};

const LeftArrow = styled.div`
  border-color: transparent rgb(255, 250, 250);
  border-style: solid;
  border-width: 20px 20px 20px 0px;
  height: 0px;
  width: 0px;
  position: absolute;
  left: 12px;
  top: 4px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: 3px solid #000;
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 18px;
  font-weight: 600;
  position: relative;
  cursor: pointer;
  margin: 12px 0 12px 0;
  border-radius: 10px;
  padding: 6px;
  outline: none;
  :hover {
    border-color: rgb(255, 232, 31);
    transition: all 0.3s ease-in;
  }
  &:hover ${LeftArrow} {
    animation-name: arrow-slide;
    border-color: transparent rgb(255, 232, 31);
    transition: all 0.3s ease-in;
    animation-duration: 250ms;
    animation-delay: 0.3s;
  }
  @keyframes arrow-slide {
    0% {
      transform: translateX(-6px);
    }
    100% {
      transform: translateX(-12px);
    }
  }
`;

const BackButtonText = styled.p`
  position: absolute;
  right: 10px;
  top: -4px;
`;
