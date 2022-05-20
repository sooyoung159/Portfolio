import styled from "styled-components";
import background from "../img/background2.jpeg";

const Main = () => {
  return (
    <Me id="main">
      <BackImg src={background} />
      <div>
        <Title>
          <div>프론트엔드 개발자</div>
          <div>강수영 입니다.</div>
        </Title>
        <Description>
          <div>안녕하세요</div>
          <div>새로운 것에 관심이 많은 웹 개발자입니다.</div>
          <div>새로운 것에 대한 거부감이 없는것이 저의 장점입니다</div>
        </Description>
      </div>
    </Me>
  );
};

export default Main;

const Me = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
  > div {
    color: white;
    justify-content: center;
    text-align: center;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
  /* background-color: none; */
`;

const BackImg = styled.img`
  width: 100vw;
  position: absolute;
  z-index: -1;
  opacity: 0.8;
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
  @media screen and (max-width: 850px) {
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 2rem;
  /* display: flex; */
  /* justify-content: center; */
  text-align: center;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 3rem;
`;

const Description = styled.div`
  text-align: center;
  font-weight: 800;
  color: lightgray;
  line-height: 1.5rem;
`;
