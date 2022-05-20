import styled, { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Main from "./components/Main";
import Project from "./components/Project";
import Skills from "./components/Skills";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Test>
        <Global>
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
        </Global>
      </Test>
    </ThemeProvider>
  );
}

export default App;

const Test = styled.div`
  @media screen and (min-width: 1200px) {
    /* width: 1000px; */
    display: flex;
    /* border: 1px gray solid; */
    justify-content: center;
    /* align-items: center; */
    /* z-index: 100; */
  }
`;

const Global = styled.div`
  @media screen and (min-width: 1200px) {
    width: 1000px;
    border: 2px black solid;
  }
`;

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
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
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
