import { useCallback, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Project from "./components/Project";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Title href="#main">{"<Main />"}</Title>
        <Title href="#aboutme">{"<About Me />"}</Title>
        <Title href="#career">{"<Career />"}</Title>
        <Title href="#footer">{"<Footer />"}</Title>
      </Wrapper>
      {/* <Header /> */}
      <Main className="box" />
      <AboutMe className="box1" />
      <Career className="box" />
      {/* <Project /> */}
      <Footer className="box" />
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.color};
  font-size: 1rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.color.color};
  /* background-color: #d9ffcf; */
`;

const Title: any = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.color.color};
`;
