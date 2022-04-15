import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import wantedlogo from "../img/wanted.svg";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const Career: any = () => {
  return (
    <Wrapper>
      <Container>
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
                팀을 이루어 수행하는 프로젝트 8개와 개인 프로젝트 1개를
                개인과제를 수행하는 프로그램입니다.
              </div>
            </Description>
            <SwiperStyled
              spaceBetween={0}
              slidesPerView={1}
              loop={true}
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
            </SwiperStyled>
          </NameCard>
        </About>
      </Container>
    </Wrapper>
  );
};
export default Career;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.background_white};
`;

const Container = styled.div`
  padding: 1rem;
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.color};
  font-weight: bold;
  font-style: bold;
  border: 2px solid ${(props) => props.theme.color.color};
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
  width: 35%;
`;

const SwiperStyled = styled(Swiper)`
  width: 25rem;
  height: 80vh;
  background-color: ${(props) => props.theme.color.background_white};
  border-radius: 12px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-left: 1rem;
  z-index: 5;
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
  :hover {
    .swiper-button-next,
    .swiper-button-prev {
      display: block;
    }
  }
`;

const Project = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  margin: 1rem 4rem;
  text-align: center;
`;

const ProjectWrapper = styled.div`
  text-align: left;
  background-color: white;
  width: 20rem;
  height: 60vh;
  border: 2px solid ${(props) => props.theme.color.color};
  border-radius: 10px;
  padding: 2rem 1rem;
`;
