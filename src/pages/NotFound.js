import React from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";

import { MainWrapper } from "./Characters";
import { BackButton } from "../components/BackButton";

export const NotFound = () => {
  const history = useHistory();
  return (
    <>
      <h3>404 - Page Not Found</h3>
      <MainWrapper>
        <BackButton history={history} />
        <p>Search again you will...</p>
        <YodaImage
          src="../images/yoda.jpg"
          alt="Photo by Riku Lu on Unsplash"
        />
      </MainWrapper>
    </>
  );
};

const YodaImage = styled.img`
  width: 300px;
`;
