import styled from "styled-components";

const Main: any = () => {
  return (
    <Me>
      <div>
        <div>프론트엔드 개발자</div>
        <div>강수영 입니다.</div>
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
  height: 100vh;
  > div {
    font-size: 3rem;
  }
  background-color: white;
`;
