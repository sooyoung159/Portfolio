import styled from "styled-components";
import frontend from "../img/frontnew.png";
import virsion from "../img/git.png";
import deployment from "../img/deployment.png";

const Skills = () => {
  return (
    <Wrapper id="skills">
      <Title>
        {/* <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "1rem" }} /> */}
        {`<Skills />`}
      </Title>
      <SkillWrapper>
        <LeftSkills>
          <SkillTitle>Frontend</SkillTitle>
          <FrontImg src={frontend} />
        </LeftSkills>
        <RightSkills>
          <RightSkillWrapper>
            <div>Deployment</div>
            <FrontImg src={deployment} />
          </RightSkillWrapper>

          <RightSkillWrapper>
            <div>Virsion control</div>
            <FrontImg src={virsion} />
          </RightSkillWrapper>
        </RightSkills>
      </SkillWrapper>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  width: 100vw;
  height: 40rem;
  background-color: lightgray;
  padding-top: 2rem;
  /* display: flex; */
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: black;
  /* border-bottom: 1px solid black; */
  /* border-radius: 20px; */
  margin: 4rem;
  padding: 0.5rem 1rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
`;

const SkillWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 30rem;
  justify-content: space-around;
  margin: auto;
  margin-top: 1rem;
  /* height: 40vh; */
  /* align-items: center; */
`;
const LeftSkills = styled.div`
  background-color: white;
  width: 20rem;
  height: 32rem;
  border-radius: 10px;
`;

const RightSkills = styled.div`
  /* background-color: white; */
  width: 20rem;
  height: 30rem;
  > div:first-child {
    margin-bottom: 2rem;
    /* padding-bottom: rem; */
  }
`;

const FrontImg = styled.img`
  width: 100%;
  /* height: 100%; */
`;

const SkillTitle = styled.div`
  font-size: 1.5rem;
  /* padding: 0.5rem 1rem; */
  margin: 1rem 2rem;
  border-bottom: 1px solid black;
  font-weight: bold;
`;

const RightSkillWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  padding: 1rem 2rem;
  > div {
    font-size: 1.5rem;
    border-bottom: 1px solid black;
    font-weight: bold;
  }
  > img {
    height: 100%;
  }
`;
