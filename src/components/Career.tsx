import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import wantedlogo from "../img/wanted.svg";
import "swiper/css";

const Career = () => {
  return (
    <Wrapper>
      <Title>{`<Career/>`}</Title>
      <About>
        <NameCard>
          <Description>
            <img src={wantedlogo} />
            <div>Pre-Onboarding Course Front-End</div>
            <div>2022.02 - 2022.04</div>
            <div>
              원티드 채용 플랫폼에서 진행한 `Pre-Onboarding Course`라는
              프로그램입니다. `Codestates`라는 교육기관과 함께 프로그램 이름
              그대로 React를 활용하여 기초적인 구현을 할 수 있는 지원자를
              선정하여 여러 기업에서 제공하는 과제를 한 달 동안 다른 사람들과
              팀을 이루어 수행하는 프로젝트 8개와 개인 프로젝트 1개를 개인과제를
              수행하는 프로그램입니다.
            </div>
          </Description>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Project>
                <ProjectWrapper>
                  <div>{"</>"} 리뷰 등록 및 리뷰 확인 페이지</div>
                  <div>
                    상품 리뷰 리스트 페이지, 상품 리뷰 상세 페이지,
                    리뷰등록페이지를 만들어 리뷰를 등록하고 확인할 수 있는
                    페이지를 만듭니다
                  </div>
                  <div># 구현</div>
                  <div>
                    <ul>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                    </ul>
                  </div>
                  <div>#기술 스택</div>
                  <div>
                    <ul>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                    </ul>
                  </div>

                  <div>
                    <div>github</div>
                    <div>배포</div>
                  </div>

                  <div>개인프로젝트</div>
                </ProjectWrapper>
              </Project>
            </SwiperSlide>
            <SwiperSlide>
              <Project>
                <ProjectWrapper>
                  <div>{"</>"} 리뷰 등록 및 리뷰 확인 페이지</div>
                  <div>
                    상품 리뷰 리스트 페이지, 상품 리뷰 상세 페이지,
                    리뷰등록페이지를 만들어 리뷰를 등록하고 확인할 수 있는
                    페이지를 만듭니다
                  </div>
                  <div># 구현</div>
                  <div>
                    <ul>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                    </ul>
                  </div>
                  <div>#기술 스택</div>
                  <div>
                    <ul>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                      <li>무한 스크롤</li>
                    </ul>
                  </div>

                  <div>
                    <div>github</div>
                    <div>배포</div>
                  </div>

                  <div>개인프로젝트</div>
                </ProjectWrapper>
              </Project>
            </SwiperSlide>
          </Swiper>
        </NameCard>
      </About>
    </Wrapper>
  );
};
export default Career;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
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
  width: 40%;
`;

const Project = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin: 1rem 2rem;
`;

const ProjectWrapper = styled.div`
  text-align: left;
  background-color: white;
  width: 20rem;
  height: 100%;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2rem 1rem;
`;
