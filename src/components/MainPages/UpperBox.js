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

const UpperBox = () => {
  const MemoizedUpperBox = useMemo(() => {
    return (
      <Layout>
        <StyledImage />
        <IntroduceLink to="./Introduce">큐피 소개</IntroduceLink>
        <MyPageLink to="./MyPage">마이페이지</MyPageLink>
      </Layout>
    );
  }, []);
  return MemoizedUpperBox;
};

export default UpperBox;
