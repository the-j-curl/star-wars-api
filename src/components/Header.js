import React from "react";
import styled from "styled-components/macro";

export const Header = ({ pageTitle }) => {
  return (
    <HeaderWrapper>
      <H2>{pageTitle}</H2>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const H2 = styled.h2`
  font-size: 26px;
  color: #ffd700;
  margin: 10px 0;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;
