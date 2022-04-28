import styled from "styled-components";
import momo from "../../img/momo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faListCheck,
  faLaptop,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import github from "../../img/github.svg";
import house from "../../img/house.svg";
import background from "../../img/background2.jpeg";

const Portfolio = () => {
  return (
    <ProjectWrapper>
      <ProjectTitle>
        <div>IamPortfolio</div>
        <div>2022.03 ~ </div>
        <img src={background} />
      </ProjectTitle>
      <ProjectDescription>
        <Description>
          <SubTitle>
            <FontAwesomeIcon icon={faFile} style={{ marginRight: "0.5rem" }} />
            Description
          </SubTitle>
          <div>
            <Bold>포트폴리오 입니다</Bold> 저를 한눈에 볼 수 있는 웹 사이트
            입니다 :)
            <div>
              <Bold>개인 프로젝트</Bold>
            </div>
          </div>
        </Description>
        <Detail>
          <LeftDetail>
            <div>
              {" "}
              <SubTitle>
                <FontAwesomeIcon
                  icon={faListCheck}
                  style={{ marginRight: "0.5rem" }}
                />
                역할
              </SubTitle>
              <SubDescription>
                <div># React 기본 기능 및 기술환경 구성</div>
                <div># 계층 구조 디자인</div>
                <div># 디자인 및 기현 전체</div>
              </SubDescription>
            </div>

            <div>
              <SubTitle>
                <FontAwesomeIcon
                  icon={faWifi}
                  style={{ marginRight: "0.5rem" }}
                />
                배포링크
              </SubTitle>
              <Pro_icon>
                <a href="https://github.com/sooyoung159/portfolio">
                  <img src={github} />
                </a>
                <a href="https://portfolio-jet-ten-99.vercel.app/">
                  <img src={house} />
                </a>
              </Pro_icon>
            </div>
          </LeftDetail>
          <RightDetail>
            <div>
              <SubTitle>
                <FontAwesomeIcon
                  icon={faLaptop}
                  style={{ marginRight: "0.5rem" }}
                />
                기술스택
              </SubTitle>
              <SubDescription>
                <div># React</div>
                <div># styled-components</div>
                <div># swiper.js</div>
              </SubDescription>
            </div>
          </RightDetail>
        </Detail>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default Portfolio;

const ProjectWrapper = styled.div`
  /* justify-content: center; */
  width: 100vh;
  height: 50rem;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
`;

const ProjectTitle = styled.div`
  > div:first-child {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1rem;
  }
  > div {
    margin-bottom: 1rem;
  }
  > img {
    height: 15rem;
  }
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const ProjectDescription = styled.div`
  margin: 2rem 1rem;
`;

const Description = styled.div`
  text-align: left;
  > div:first-child {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  > div:last-child {
    letter-spacing: 0.1rem;
    > div {
      margin-top: 0.4rem;
    }
  }
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Detail = styled.div`
  display: flex;
  width: 100%;
`;

const SubDescription = styled.div`
  line-height: 1.5rem;
  padding-left: 1rem;
  margin-top: 1rem;
`;

const LeftDetail = styled.div`
  width: 50%;
  text-align: left;
`;

const RightDetail = styled.div`
  text-align: left;
`;

const Pro_icon = styled.div`
  /* margin-bottom: 0.5rem; */
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  width: 50%;
  > a {
    > img {
      :hover {
        cursor: pointer;
      }
      width: 2rem;
    }
  }
`;
