import AboutMe from "./components/AboutMe";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Project from "./components/Project";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Main />
      <AboutMe />
      <Career />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
