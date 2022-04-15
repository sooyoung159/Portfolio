import styled from "styled-components";
import techStack from "../img/techstack.png";

const AboutMe: any = () => {
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
            <div>
              "어떻게 하면 사용자가 더 쓰기편한 서비스를 만들 수 있을까?"|
              안녕하세요! 프론트엔드 개발자 이제찬입니다. 대학생활에 다양한
              프로젝트와 인턴십과정에서 다양한 프로젝트를 진행하였고, 이를 통해
              웹 개발 업무 프로세스에 전반적인 이해력을 습득하였습니다.
              개발하면서 제가 느낀 좋은 IT 서비스는 사용자의 입장에서 쓰기편한
              서비스라 생각하고, 늘 사용자의 관점을 고안하며 개발하고 있습니다.
              현재는 거창한 업무성과보다 사용자의 작은 문제해결에 끝까지 몰입할
              수 있는 신입 개발자입니다. 이런 저의 성장가능성을 믿고 이끌어줄
              회사를 찾고 있습니다.
            </div>
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
  height: 100vh;
  background-color: #d9ffcf;
  padding: 1rem;
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: #2ad100;
  border: 2px solid #2ad100;
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
  width: 50vw;
`;

const Skill = styled.div`
  width: 50vw;
  > img {
    position: relative;
    height: 90vh;
  }
`;
