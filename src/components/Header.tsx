import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div>{"<Header />"}</div>
      <div>{"<About Me />"}</div>
      <div>{"<Header />"}</div>
      <div>{"<Footer />"}</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.color};
  font-size: 1rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 3rem;
  border-bottom: 1px solid lightgray;
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
  @media screen and (max-width: 850px) {
    font-size: 10px;
    > div {
      font-size: 10px;
    }
  }
  /* background-color: #d9ffcf; */
`;
