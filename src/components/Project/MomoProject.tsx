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

const MomoProject = () => {
  return (
    <ProjectWrapper>
      <ProjectTitle>
        <div>IamMOMOproject</div>
        <div>2022.04 ~</div>
        <img src={momo} />
      </ProjectTitle>
      <ProjectDescription>
        <Description>
          <SubTitle>
            <FontAwesomeIcon icon={faFile} style={{ marginRight: "0.5rem" }} />
            Description
          </SubTitle>
          <div>
            <Bold>본격 '일상 공감' 프로젝트입니다.</Bold> 모든 글은 '모모'라는
            닉네임을 사용하며 가벼운 일상에서 부터 진솔한 감정까지 다양한
            이야기로 서로의 삶을 공유하는 서비스입니다. 무슨 글을 써야 할지
            모를때는 다양한 예시 질문을 보고 선택해서 글을 시작해 보세요 :)
            <div>
              <Bold>
                '멋쟁이사자처럼' 사이드프로젝트(기획 5, 프론트엔드 2, 서버 2)
              </Bold>
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
                <div># 회원가입 및 로그인</div>
                <div># DB 서버와의 연결</div>
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
                <a href="https://github.com/Sideproject-momoProject/iammomoproject">
                  <img src={github} />
                </a>
                <a href="https://iammomoproject.netlify.app/">
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
                <div># axios</div>
                <div># swiper.js</div>
              </SubDescription>
            </div>
          </RightDetail>
        </Detail>
      </ProjectDescription>
    </ProjectWrapper>
  );
};

export default MomoProject;

const ProjectWrapper = styled.div`
  width: 100vh;
  height: 50rem;
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 2rem;
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
