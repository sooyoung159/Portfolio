import { useCallback, useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

function App() {
  const mainRef = useRef();
  const aboutRef = useRef();
  const careerRef = useRef();
  const footerRef = useRef();
  const [headerState, setHeaderState] = useState([true, false, false, false]);

  const scrollObserver = useCallback(
    (entries: any) => {
      const target = entries[0];
      if (target.isIntersecting) {
        setHeaderState([mainRef.current, aboutRef, careerRef, footerRef]);
      }
    },
    [size]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(scrollObserver, option);
    if (mainRef.current) observer.observe(mainRef.current);
  }, option);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <div>{"<Header />"}</div>
        <div>{"<About Me />"}</div>
        <div>{"<Header />"}</div>
        <div>{"<Footer />"}</div>
      </Wrapper>
      {/* <Header /> */}
      <Main ref={mainRef} />
      <AboutMe ref={aboutRef} />
      <Career ref={careerRef} />
      {/* <Project /> */}
      <Footer ref={footerRef} />
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
  border-bottom: 1px solid lightgray;
  /* background-color: #d9ffcf; */
`;
