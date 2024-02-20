import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Layout = styled.div`
  display: flex;
  flex-basis: 10%;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
`;
const StyledImage = styled.div`
  margin: 0 30px 0 30px;
  width: 60px;
  height: 50px;
  background-image: url(${process.env.PUBLIC_URL + '/img/logo.png'});
  background-size: contain;
`;

const IntroduceLink = styled(Link)`
  margin: 20px;
  color: #0a0a23;
  text-decoration: none;
`;

const MyPageLink = styled(Link)`
  margin: 20px;
  color: #0a0a23;
  text-decoration: none;
`;


const StyledMenu = styled.button`
appearance: none;
border: transparent;
background-color: transparent;
cursor: pointer;
padding: 10px 50px;
color: #FF7A00;
display: inline;
font-family: 'Inter', sans-serif;
border-bottom-width: 2px;
border-bottom-style: solid;
border-bottom-color: transparent;

&:hover{
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #FF7A00;
  // border-bottom: 5px solid #FF7A00;

  // background-color: #FF7A00;
  // color: white;
  // border-radius: 5px;
}
`
const StyledText = styled.div`
// position: absolute;
// width: 488px;
// height: 19px;
// left: 262px;
// top: 71px;


`


const UpperBox = () => {
  const MemoizedUpperBox = useMemo(() => {
    return (
      <Layout>
        <StyledImage />
        <StyledText>
          <StyledMenu><IntroduceLink to="/Introduce">큐피 소개</IntroduceLink></StyledMenu>
          <StyledMenu><MyPageLink to="/MyPage">마이페이지</MyPageLink> </StyledMenu>
        </StyledText>
      </Layout>
    );
  }, []);
  return MemoizedUpperBox;
};

export default UpperBox;
