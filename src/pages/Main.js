import styled from 'styled-components';
import MakeRoomComponent from '../components/MainPages/MakeRoomComponent';
import MotivationText from '../components/MainPages/MotivationText';
import Category from '../components/MainPages/Category';
import Room from '../components/MainPages/Room';
import Info from '../components/MainPages/Info';
import Tree from '../components/MainPages/Tree';
import { useState } from 'react';
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
        <MakeRoomComponent />
        <MotivationText />
      </UpperBox>
      <LowerBox>
        <LeftBox>
          <Category categoryList={categoryList} onClick={handleCategoryClick} />
          <Room />
        </LeftBox>
        <RightBox>
          <Info />
          <Tree />
        </RightBox>
      </LowerBox>
    </MainBox>
  );
};
export default Main;

const MainBox = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
`;

const UpperBox = styled.div`
  display: flex;
  flex-basis: 10%;
  justify-content: space-around;
  align-items: center;
`;

const LowerBox = styled.div`
  padding: 0 10px 10px 10px;
  display: flex;
  flex-basis: 90%;
  justify-content: space-around;
`;
const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  flex-wrap: nowrap;
`;
const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 35%;
  flex-wrap: nowrap;
  flex-direction: column;
`;
