import styled from "styled-components";

const Footer: any = () => {
  return (
    <Wrapper id="footer">
      <TitleContainer>
        <Title>{`<Footer />`}</Title>
      </TitleContainer>
      <Container>
        <NameCardContainer>
          <Contact>Contact</Contact>
          <NameCard>
            <Name>Sooyoung Kang</Name>
            <div>
              <InfoContainer>
                <Info>Email</Info>
                <div>sooyoung159@naver.com</div>
              </InfoContainer>
              <InfoContainer>
                <Info>github</Info>
                <div>https://github.com/sooyoung159</div>
              </InfoContainer>
            </div>
          </NameCard>
        </NameCardContainer>
      </Container>
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
  padding-top: 3rem;
  padding-left: 2rem;
`;

const Title = styled.div`
  display: inline;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.color};
  border: 2px solid ${(props) => props.theme.color.color};
  border-radius: 10px;
  margin: 3rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const NameCardContainer = styled.div`
  align-items: center;
  /* text-align: center; */
  height: auto;
  margin-top: 9rem;
  /* padding: 2rem; */
  background-color: white;
  width: 50vw;
  height: 50vh;
  padding: 1.5rem;
`;

const Contact = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.color.color};
`;

const NameCard = styled.div`
  display: flex;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  padding-top: 5rem;
`;

const Name = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.color};
`;

const InfoContainer = styled.div`
  padding-bottom: 1rem;
`;
const Info = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.color.color};
  padding-bottom: 5px;
`;
