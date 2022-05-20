import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import wantedlogo from "../img/wanted.svg";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import github from "../img/github.svg";
import house from "../img/house.svg";

SwiperCore.use([Navigation, Pagination]);

const Career: any = () => {
  return (
    <Wrapper id="career">
      <Container>
        <Title>{`<Career />`}</Title>
        <About>
          <NameCard>
            <Description>
              <img src={wantedlogo} />
              <Des1>Pre-Onboarding Course Front-End</Des1>
              <Des2>2022.02 - 2022.04</Des2>
              <Des3>
                원티드 채용 플랫폼에서 진행한 `Pre-Onboarding Course`라는
                프로그램입니다. `Codestates`라는 교육기관과 함께 프로그램 이름
                그대로 React를 활용하여 기초적인 구현을 할 수 있는 지원자를
                선정하여 여러 기업에서 제공하는 과제를 한 달 동안 다른 사람들과
                팀을 이루어 수행하는 프로젝트 8개와 개인 프로젝트 1개를
                개인과제를 수행하는 프로그램입니다.
              </Des3>
            </Description>
            {
              //#region
            }
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
                    <Pro1>{"</>"} 리뷰 등록</Pro1>
                    <Pro2>
                      리뷰를 등록하고 확인할 수 있는 페이지를 만듭니다
                    </Pro2>
                    <Pro_title># 구현</Pro_title>
                    <Pro3>
                      <ul>
                        <li>Intersecion api를 통한 무한 스크롤</li>
                        <li>Firebase 서버 사용</li>
                        <li>Redux를 통한 상태관리</li>
                        <li>
                          정렬, 리뷰 목록(그리드, 리스트), 댓글, 좋아요,
                          링크복사
                        </li>
                        <li>사진 추가 및 미리보기</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>Next.js</span>
                        <span>Firebase</span>
                        <span>uuid</span>
                      </div>
                      <div>
                        <span>Redux-toolkit</span>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 개인프로젝트</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/sooyoung159/wanted-codestates-project-9">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-9-one.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 폼 생성</Pro1>
                    <Pro2>원하는 폼을 생성하고 목록에서 확인 및 제거 가능</Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>폼 생성 폼</li>
                        <li>폼 드래그 앤 드랍</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                      </div>
                      <div>
                        <span>react-beautiful-dnd</span>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 7명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-07">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-07.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 간병인 신청하기</Pro1>
                    <Pro2>원하는 시간, 날짜등 신청정보를 입력</Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>돌봄 스케쥴 설정</li>
                        <li>돌봄 유형(시간제/종일제)에 따라 돌봄 시간 선택</li>
                        <li>
                          돌봄 시작날과 현재 시간을 고려 한 돌봄 시작 시각 선택
                        </li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                        <span>Redux</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 7명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-06">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-06.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 진단 검사 페이지</Pro1>
                    <Pro2>
                      기업명을 검색하면 기업과 사용자의 진단점수를 그래프로 표시
                    </Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>라이브러리를 이용한 그래프 구현</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>Vue.js</span>
                      </div>
                      <div>
                        <span>vue-chart.js</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 6명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-11">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-team-05-11.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 검색어 추천</Pro1>
                    <Pro2>병명을 검색하면 그와 비슷한 병명을 추천 사이트</Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>
                          Redux-toolkit, RTK query를 이용한 네트워크 요청 및
                          상태관리
                        </li>
                        <li>최적화 debounce</li>
                        <li>debounce hook을 통한 재사용 용이</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                        <span>Redux-tollkit</span>
                        <span>RTK Query</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 2명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-2">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-10-2.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 휴양림 저장</Pro1>
                    <Pro2>
                      충청북도 휴양림 중 마음에 드는 곳을 저장하는 서비스
                    </Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>Redux-toolkit 이용한 네트워크 요청 및 상태관리</li>
                        <li>
                          localstorage에 저장하여 새로고침 후에도 확인가능
                        </li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                        <span>Redux-tollkit</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 6명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-08">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-08.netlify.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 듀얼 셀렉터</Pro1>
                    <Pro2>양쪽의 옵션 선택, 다중선택 및 이동</Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>draggble api를 통한 drag and drop 구현</li>
                        <li>dnd를 hook으로 만들어 재사용 용이</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                        <span>recoil</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 6명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-3">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-team-05.github.io/wanted-codestates-project-05-3/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 게임 전적 사이트</Pro1>
                    <Pro2>유저의 전적 조회 및 랭킹을 볼 수 있는 사이트</Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>차트 및 그래펴 구현</li>
                        <li>
                          기존 라이브러리를 컴포넌트로 구현하여 다른 팀원들이
                          사용하기 용이하게 커스텀
                        </li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                        <span>apexchart</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 6명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-02">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-02.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
              <SwiperSlide>
                <Project>
                  <ProjectWrapper>
                    <Pro1>{"</>"} 패션 웹 페이지</Pro1>
                    <Pro2>
                      키워드, url, 코드를 입력하면 그에 따른 결과를 보여줌
                    </Pro2>
                    <Pro_title># 구현 및 역할</Pro_title>
                    <Pro3>
                      <ul>
                        <li>
                          url, 코드로 검색시 상품 상세정보를 왼쪽에 표현
                          오른쪽에 추천 제품 나열
                        </li>
                        <li>추천 제품에서 상품 클릭시 상품 상세정보 제공</li>
                        <li>데이터 캐싱</li>
                      </ul>
                    </Pro3>
                    <Pro_title>#기술 스택</Pro_title>
                    <Pro4>
                      <div>
                        <span>React</span>
                      </div>
                      <div>
                        <span>styled-components</span>
                      </div>
                    </Pro4>
                    <Pro2># 팀 프로젝트(팀원 6명)</Pro2>

                    <Pro_icon>
                      <a href="https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-05">
                        <img src={github} />
                      </a>
                      <a href="https://wanted-codestates-project-05-05-01.vercel.app/">
                        <img src={house} />
                      </a>
                    </Pro_icon>
                  </ProjectWrapper>
                </Project>
              </SwiperSlide>
            </SwiperStyled>
            {
              //#endregion
            }
          </NameCard>
        </About>
      </Container>
    </Wrapper>
  );
};
export default Career;

const Wrapper = styled.div`
  width: 100vw;
  height: 50rem;
  background-color: white;
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
`;

const Container = styled.div`
  padding: 1rem;
  padding-top: 2rem;
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
const About = styled.div`
  text-align: center;
  justify-content: center;

  width: 100%;
  height: 50vh;
  padding-top: 1rem;
`;

const NameCard = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const Description = styled.div`
  width: 30%;
  > img {
    width: 10rem;
    margin-bottom: 2rem;
  }
  margin-left: 3rem;
  padding-top: 2rem;
`;

const Des1 = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: black;
`;

const Des2 = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const Des3 = styled.div`
  text-align: left;
  line-height: 1.5rem;
  letter-spacing: 1px;
`;

const SwiperStyled = styled(Swiper)`
  width: 60%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 5rem;
  z-index: 5;
  /* height: 30rem; */
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
  /* &.slide {
    height: 100%;
  } */
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
  width: 30rem;
  /* height: 80%; */
  border: 2px solid black;
  border-radius: 10px;
  padding: 2rem 1rem;
`;

const Pro1 = styled.div`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 1rem;
`;

const Pro2 = styled.div`
  margin-bottom: 1rem;
`;

const Pro_title = styled.div`
  margin-bottom: 0.5rem;
`;

const Pro3 = styled.div`
  margin-bottom: 1rem;
  > ul {
    padding-left: 2rem;
    > li {
      margin-bottom: 0.2rem;
    }
  }
`;

const Pro4 = styled.div`
  margin-bottom: 1rem;
  > div {
    padding-bottom: 1rem;
    > span {
      border: 1px solid black;
      border-radius: 10px;
      padding: 3px;
      background-color: white;
      color: black;
      margin-right: 0.5rem;
    }
  }
`;

const Pro_icon = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-around;
  > a {
    > img {
      :hover {
        cursor: pointer;
      }
      width: 2rem;
    }
  }
`;
