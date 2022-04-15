import styled from "styled-components";

const Footer: any = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <Title>contact</Title>
      </TitleContainer>
      <NameCardContainer>
        <NameCard>
          <div>Sooyoung Kang</div>
          <div>
            <div>
              <div>email</div>
              <div>sooyoung159@naver.com</div>
            </div>
            <div>
              <div>github</div>
              <div>https://github.com/sooyoung159</div>
            </div>
          </div>
        </NameCard>
      </NameCardContainer>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #d9ffcf;
`;

const TitleContainer = styled.div`
  padding-top: 4rem;
  padding-left: 2rem;
`;

const Title = styled.div`
  font-size: 4rem;
  color: #2ad100;
`;

const NameCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 9rem;
  /* padding: 2rem; */
`;

const NameCard = styled.div`
  width: 50vw;
  height: 40vh;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
`;
