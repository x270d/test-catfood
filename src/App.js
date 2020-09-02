import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import bg from "./resources/img/proto-repeat.png";
import TrebuchetMSEot from "./resources/fonts/TrebuchetMS/TrebuchetMS.eot";
import TrebuchetMSWoff from "./resources/fonts/TrebuchetMS/TrebuchetMS.woff";
import TrebuchetMSTtf from "./resources/fonts/TrebuchetMS/TrebuchetMS.ttf";

import ExoThinEot from "./resources/fonts/Exo2.0/Exo20-Thin.eot";
import ExoThinTtf from "./resources/fonts/Exo2.0/Exo20-Thin.ttf";
import ExoThinWoff from "./resources/fonts/Exo2.0/Exo20-Thin.woff";
import ExoThinWoff2 from "./resources/fonts/Exo2.0/Exo20-Thin.woff2";
import List from "./components/List";

function App() {
  return (
    <Wrapper>
      <h1>Ты сегодня покормил кота?</h1>
      <List />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: 'Trebuchet MS';
    src: url(${TrebuchetMSEot});
    src: local('Trebuchet MS'), local('TrebuchetMS'),
        url(${TrebuchetMSEot}#iefix) format('embedded-opentype'),
        url(${TrebuchetMSWoff}) format('woff'),
        url(${TrebuchetMSTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Exo 2.0';
    src: url(${ExoThinEot});
    src: url(${ExoThinEot}?#iefix) format('embedded-opentype'),
        url(${ExoThinWoff2}) format('woff2'),
        url(${ExoThinWoff}) format('woff'),
        url(${ExoThinTtf}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
}
h1{
  text-shadow: 0 1px 0 #000000;
    color: #fff;
    text-align: center;
    font-family: "Exo 2.0",sans-serif;
    font-size: 36px;
    font-weight: 400;
    padding-bottom: 6px;
}
`;

const Wrapper = styled.div`
  font-family: "Trebuchet MS", sans-serif;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(${bg});
  min-height: 100vh;
  padding: 34px 0;
  display: flex;
  margin: auto;
  width: 100%;
  justify-content: center;
  flex-direction: column;
}
`;
