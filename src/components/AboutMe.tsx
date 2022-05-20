import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBlogger, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const AboutMe: any = () => {
  return (
    <Wrapper id="aboutme">
      <Title>
        {/* <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "1rem" }} /> */}
        {`<About Me />`}
      </Title>

      <InfoWrapper>
        <InfoLeft>
          <Infomations>
            <div>
              <FontAwesomeIcon
                icon={faUser}
                style={{
                  marginRight: "1rem",
                  fontSize: "2rem",
                  marginTop: "0.5rem",
                }}
              />
            </div>
            <Infomation>
              <div>이름</div>
              <div>강수영</div>
            </Infomation>
          </Infomations>
          <Infomations>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  marginRight: "1rem",
                  fontSize: "2rem",
                  marginTop: "0.3rem",
                }}
              />
            </div>
            <Infomation>
              <div>이메일</div>
              <div>sooyoung159@naver.com</div>
            </Infomation>
          </Infomations>
        </InfoLeft>
        <InfoRight>
          <Infomations>
            <div>
              <FontAwesomeIcon
                icon={faBlogger}
                style={{
                  marginRight: "1rem",
                  fontSize: "2rem",
                }}
              />
            </div>
            <Infomation>
              <div>블로그</div>
              <div>블로그 주소</div>
            </Infomation>
          </Infomations>
          <Infomations>
            <div>
              <FontAwesomeIcon
                icon={faGithub}
                style={{
                  marginRight: "1rem",
                  fontSize: "2rem",
                }}
              />
            </div>
            <Infomation>
              <div>Github</div>
              <div>
                <a href="https://github.com/sooyoung159">
                  https://github.com/sooyoung159
                </a>
              </div>
            </Infomation>
          </Infomations>
        </InfoRight>
      </InfoWrapper>

      {/* <About>
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
      </About> */}
    </Wrapper>
  );
};

export default AboutMe;

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: white;
  padding-top: 2rem;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }

  @media screen and (max-width: 850px) {
    font-size: 10px;
    > div {
      font-size: 10px;
    }
  }
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
  @media screen and (max-width: 850px) {
    margin: 0;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-around;
  /* background-color: lightgray; */
  margin: auto;
  margin-top: 1rem;
  height: 40vh;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;

const InfoLeft = styled.div`
  /* width: 50%; */
  > div {
    margin-bottom: 1rem;
  }
`;

const InfoRight = styled.div`
  /* width: 50%; */
  > div {
    margin-bottom: 1rem;
    align-items: center;
  }
`;

const Infomations = styled.div`
  display: flex;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

const Infomation = styled.div`
  line-height: 1.5rem;
  > div:first-child {
    font-weight: bold;
  }
`;

// const About = styled.div`
//   /* text-align: center; */
//   justify-content: center;

//   width: 100%;
//   /* height: 50vh; */
// `;

// const NameCard = styled.div`
//   padding: 1rem;
//   display: flex;
//   justify-content: space-around;
// `;

// const Description = styled.div`
//   width: 50vw;
//   /* display: flex; */
//   /* color: white; */
//   align-items: center;
//   justify-content: center;
//   padding-top: 5rem;
//   padding-right: 5rem;
//   padding-left: 1rem;
//   /* > div {
//     margin-bottom: 1rem;
//   } */
// `;

// const Des1 = styled.div`
//   font-size: 1.5rem;
//   margin-bottom: 2rem;
//   color: ${(props) => props.theme.color.color};
// `;

// const Des2 = styled.div`
//   font-size: 1.3rem;
//   margin-bottom: 1rem;
//   color: ${(props) => props.theme.color.color};
// `;

// const Des3 = styled.div`
//   /* font-size: 1.3rem; */
//   margin-bottom: 1rem;
// `;

// const Des4 = styled.div`
//   font-size: 1rem;
//   margin-bottom: 2rem;
//   color: ${(props) => props.theme.color.color};
// `;

// const Skill = styled.div`
//   width: 50vw;
//   padding-top: 2rem;

//   > img {
//     border: 1px solid ${(props) => props.theme.color.color};
//     border-radius: 10px;
//     position: relative;
//     height: 70vh;
//     margin-left: 5rem;
//   }
// `;
