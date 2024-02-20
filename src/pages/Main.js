import styled from 'styled-components';
import MotivationText from '../components/MainPages/MotivationText';
import UpperBox from '../components/MainPages/UpperBox';
import RightBox from '../components/MainPages/RightBox';
import Category from '../components/MainPages/Category';
import Room from '../components/MainPages/Room';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
  //Main 페이지 진입 시 API 호출
  useEffect(() => {
    axios
      .get('API 엔드포인트')
      .then((response) => {})
      .catch((error) => {});
  }, []);
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
      <UpperBox />
      <MediumBox>
        <MotivationText />
        <Category categoryList={categoryList} onClick={handleCategoryClick} />
      </MediumBox>
      <LowerBox>
        <Room categoryList={categoryList} />
        <RightBox />
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

const MediumBox = styled.div`
  display: flex;
  flex-basis: 10%;
`;

const LowerBox = styled.div`
  display: flex;
  flex-basis: 80%;
  justify-content: space-around;
`;
