import styled from "styled-components";
import techStack from "../img/techstack.png";

const AboutMe = () => {
  return (
    <Wrapper>
      <Title>{`<About Me/>`}</Title>
      <About>
        <NameCard>
          <Description>
            <div>계속 발전하드 개발자</div>
            <div>새로운 도전을 두려워하지 않고 배움을 멈추지 않습니다</div>
            <div>프론트엔드 개발자로 시작해서</div>
            <div>2022년 현재 프론트엔드 개발자로서 나아가고자 합니다.</div>
            <div>3년간 일본에서 풀스택 개발자로서의 경험에서 배운</div>
            <div>
              개발 지식과 책임감, 그리고 협력을 기반으로 삼아 웹 애플리케이션을
            </div>
            <div>개발합니다.</div>
          </Description>
          <Skill>
            <img src={techStack} />
          </Skill>
        </NameCard>
      </About>
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
  width: 100vw;
  height: 70vh;
  background-color: white;
  padding: 1rem;
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: #d2f7e1;
  border: 2px solid #d2f7e1;
  border-radius: 10%;
`;

const About = styled.div`
  text-align: center;
  justify-content: center;

  width: 100%;
  height: 50vh;
`;

const NameCard = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Description = styled.div`
  width: 50%;
`;

const Skill = styled.div`
  width: 50%;
  > img {
    width: 100%;
  }
`;
