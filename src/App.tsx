import { useCallback, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Project from "./components/Project";
import Skills from "./components/Skills";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Title href="#main">{"<Main />"}</Title>
        <Title href="#aboutme">{"<About Me />"}</Title>
        <Title href="#skills">{"<Skills />"}</Title>
        <Title href="#career">{"<Career />"}</Title>
        <Title href="#project">{"<Project />"}</Title>
      </Wrapper>
      <Main />
      <AboutMe />
      <Skills />
      <Career />
      <Project />
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  color: black;
  font-size: 1rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 3rem;
  border-bottom: 1px solid black;
  /* background-color: #d9ffcf; */
`;

const Title: any = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: black;
`;
