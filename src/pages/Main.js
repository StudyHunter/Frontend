import styled from 'styled-components';
import MakeRoomComponent from '../components/MainPages/MakeRoomComponent';
import MotivationText from '../components/MainPages/MotivationText';
import Category from '../components/MainPages/Category';
import Room from '../components/MainPages/Room';
import Info from '../components/MainPages/Info';
import Tree from '../components/MainPages/Tree';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Main = () => {
  //더미데이터
  const tempCategoryList = {
    프론트엔드: false,
    백엔드: false,
    앱개발: false,
    데이터사이언스: false,
    데브옵스: false,
    게임: false,
    시스템: false,
  };

  const [categoryList, setCategoryList] = useState(tempCategoryList);
  const handleCategoryClick = (e) => {
    const value = e.currentTarget.innerHTML;
    if (categoryList[value]) {
      setCategoryList((current) => {
        const newList = { ...current };
        newList[value] = false;
        return newList;
      });
    } else {
      setCategoryList((current) => {
        const newList = { ...current };
        newList[value] = true;
        return newList;
      });
    }
  };

  return (
    <MainBox>
      <UpperBox>
        <StyledImage />
        <IntroduceLink to="./Introduce">큐피 소개</IntroduceLink>
        <MyPageLink to="./MyPage">마이페이지</MyPageLink>
      </UpperBox>
      <MediumBox>
        <MotivationText />
        <Category categoryList={categoryList} onClick={handleCategoryClick} />
      </MediumBox>
      <LowerBox>
        <Room />
        <RightBox>
          <Info />
          <Tree />
          <MakeRoomComponent />
        </RightBox>
      </LowerBox>
    </MainBox>
  );
};
export default Main;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
`;

const UpperBox = styled.div`
  display: flex;
  flex-basis: 10%;
  align-items: center;
`;

const MediumBox = styled.div`
  display: flex;
  flex-basis: 10%;
`;

const LowerBox = styled.div`
  display: flex;
  flex-basis: 80%;
  justify-content: space-around;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const StyledImage = styled.div`
  margin: 20px;
  width: 50px;
  height: 40px;
  background-image: url(${process.env.PUBLIC_URL + '/img/logo.png'});
  background-size: contain;
`;

const IntroduceLink = styled(Link)`
  margin: 20px;
  color: #0a0a23;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
`;

const MyPageLink = styled(Link)`
  margin: 20px;
  color: #0a0a23;
  font-size: 17px;
  font-weight: 700;
  text-decoration: none;
`;