import styled from "styled-components";
import techStack from "../img/techstack.png";

const AboutMe: any = () => {
  return (
    <Wrapper id="aboutme">
      <Title>{`<About Me />`}</Title>

      <About>
        <NameCard>
          <Skill>
            <img src={techStack} />
          </Skill>
          <Description>
            <Des1>"쉬운 서비스를 제공하고 싶다!"</Des1>
            <Des2>안녕하세요! 프론트엔드 개발자 강수영입니다.</Des2>
            <Des3>2022년 현재 프론트엔드 개발자로서 나아가고자 합니다.</Des3>
            <Des3>
              누구나 쉽게 적응할 수 있는 서비스를 만들고 싶습니다. 말 그대로
              봤을 때 특별한 경험이 없어도 어떤 기능인지 어떤 정보를 제공해 줄
              수 있을지 바로 알 수 있는 그런 서비스입니다.
            </Des3>
            <Des3>
              단순히 반복작업만 하는 프로그래머가 아닌 많은 경험과 많은 시도를
              통해 그런 보면 한눈에 알 수 있고 어떤 것을 클릭하면 내가 원하는
              정보를 찾을 수 있는지 서비스를 제공하는 프로그래머가 되고
              싶습니다.
            </Des3>
            <Des4>
              이런 저의 성장가능성을 믿고 이끌어줄 회사를 찾고 있습니다.
            </Des4>
          </Description>
        </NameCard>
      </About>
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;
  background-color: ${(props) => props.theme.color.background};
  padding-top: 2rem;
  /* margin: 1rem; */
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.color};
  border: 2px solid ${(props) => props.theme.color.color};
  border-radius: 10px;
  margin: 3rem;
`;

const About = styled.div`
  /* text-align: center; */
  justify-content: center;

  width: 100%;
  /* height: 50vh; */
`;

const NameCard = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Description = styled.div`
  width: 50vw;
  /* display: flex; */
  /* color: white; */
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  padding-right: 5rem;
  padding-left: 1rem;
  /* > div {
    margin-bottom: 1rem;
  } */
`;

const Des1 = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.color};
`;

const Des2 = styled.div`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color.color};
`;

const Des3 = styled.div`
  /* font-size: 1.3rem; */
  margin-bottom: 1rem;
`;

const Des4 = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.color.color};
`;

const Skill = styled.div`
  width: 50vw;
  padding-top: 2rem;

  > img {
    border: 1px solid ${(props) => props.theme.color.color};
    border-radius: 10px;
    position: relative;
    height: 70vh;
    margin-left: 5rem;
  }
`;
