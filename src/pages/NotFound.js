import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { H2 } from "./Characters";
import { BackButton } from "../components/BackButton";

export const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <H2>404 - Page Not Found</H2>
      <NotFoundWrapper>
        <BackButton history={history} />
        <P>Search again you will...</P>
        <YodaImage
          src="../images/yoda.jpg"
          alt="Photo by Riku Lu on Unsplash"
        />
      </NotFoundWrapper>
    </>
  );
};

const NotFoundWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const P = styled.p`
  font-weight: 500;
`;

const YodaImage = styled.img`
  width: 300px;
`;
