import styled from "styled-components";
import momo from "../img/momo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faListCheck,
  faLaptop,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import github from "../img/github.svg";
import house from "../img/house.svg";
import MomoProject from "./Project/MomoProject";
import Portfolio from "./Project/Portfolio";

const Project = () => {
  return (
    <Wrapper id="project">
      <Title>
        {/* <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "1rem" }} /> */}
        {`<Project />`}
      </Title>

      <ProjectsWrapper>
        <CenterWrapper>
          <MomoProject />
        </CenterWrapper>
        <CenterWrapper>
          <Portfolio />
        </CenterWrapper>
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Project;

const Wrapper = styled.div`
  width: 100vw;
  height: 120rem;
  background-color: lightgray;
  padding-top: 2rem;
  /* text-align: center; */
  /* display: flex; */
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: black;
  margin: 4rem;
  padding: 0.5rem 1rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectsWrapper = styled.div`
  width: 100vw;
  /* display: flex; */
  /* height: 50rem; */
  justify-content: center;
  text-align: center;
  padding-top: 1rem;
  height: 100%;
`;
