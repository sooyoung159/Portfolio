import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <div>메뉴바</div>
      <div>{"<S>"}Sooyoung Front-end Developer</div>
      <div>하나 뭐가 좋을까</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
