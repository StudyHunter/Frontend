import styled from 'styled-components';
import { Link } from 'react-router-dom';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/Swiper.css';
import { Navigation } from 'swiper/modules';

//dymmy data
import tempRoomDatas from '../../DummyData/RoomDummyData';
//슬라이드에 들어가는 방 개수
const ROOM_COUNT = 8;

const Room = ({ categoryList }) => {
  const roomDatas = filterRoomDatas(tempRoomDatas);

  //SwiperSlide ROOM_COUNT 단위로 구획
  function divideRoom(roomDatas) {
    let countRoom = 0;
    let countTotal = 0;
    let swiper = [];
    let swiperSlide = [];
    for (const roomData of roomDatas) {
      //슬라이드 요소가 꽉 찼을 때
      if (countRoom === ROOM_COUNT) {
        countRoom = 0;
        swiper.push(<StyledSwiperSlide>{swiperSlide}</StyledSwiperSlide>);
        swiperSlide = [];
      }
      swiperSlide.push(
        <Board to="/InnerRoom/" state={roomData} key={roomData.room_id}>
          <BoardImage $thumbnail={roomData.thumbnail}></BoardImage>
          <RightRoomBox>
            <BoardTitle>{roomData.title}</BoardTitle>
            <LowerRoomBox>
              <BoardTags>
                {roomData.tags.map((tag, idx) => {
                  return <Tag key={idx}>{tag}</Tag>;
                })}
              </BoardTags>
              <UserCount>
                {String(roomData.present_users) +
                  '/' +
                  String(roomData.expected_users)}
              </UserCount>
            </LowerRoomBox>
          </RightRoomBox>
        </Board>
      );
      //종료조건
      if (countTotal === roomDatas.length - 1) {
        //defaultBoard 채워넣기
        if (roomDatas.length !== ROOM_COUNT) {
          for (
            let i = 0;
            i < ROOM_COUNT - (roomDatas.length % ROOM_COUNT);
            i++
          ) {
            swiperSlide.push(
              <DefultBoard>
                <BoardImage></BoardImage>
                <RightRoomBox>
                  <BoardTitle></BoardTitle>
                  <LowerRoomBox>
                    <BoardTags></BoardTags>
                    <UserCount></UserCount>
                  </LowerRoomBox>
                </RightRoomBox>
              </DefultBoard>
            );
          }
        }
        swiper.push(<StyledSwiperSlide>{swiperSlide}</StyledSwiperSlide>);
        return swiper;
      }
      countRoom++;
      countTotal++;
    }
  }
  //filter clicked category content
  function filterCategory(categoryList) {
    let newCategoryList = [];
    for (const [key, value] of Object.entries(categoryList)) {
      if (value) newCategoryList.push(key);
    }
    return newCategoryList;
  }
  //check subset
  function isSubSet(superSet, setA) {
    let result = true;
    setA.forEach((e) => {
      if (!superSet.has(e)) result = false;
    });
    return result;
  }
  //filter roomDatas
  function filterRoomDatas(roomDatas) {
    let newList = [];
    const newCategoryList = new Set(filterCategory(categoryList));
    for (const roomData of roomDatas) {
      const roomDataTags = new Set(roomData.tags);
      if (isSubSet(roomDataTags, newCategoryList)) {
        newList.push(roomData);
      }
    }
    return newList;
  }
  return (
    <RoomBox>
      <Swiper navigation={true} modules={[Navigation]}>
        {divideRoom(roomDatas)}
      </Swiper>
    </RoomBox>
  );
};
export default Room;

const RoomBox = styled.div`
  overflow-y: auto;
  border-radius: 10px;
  //margin: 10px;
  display: flex;
  flex-basis: 75%;
  justify-contenet: center;
  align-items: center;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  border-radius: 10px;
  display: flex;
  align-itmes: start;
  flex-wrap: wrap;
`;
const Board = styled(Link)`
  display: flex;
  flex-basis: 45%;
  height: 20%;
  //height: 12%;
  margin: 10px;
  border: 1px solid ${(props) => props.theme.whiteGray};
  border-radius: 10px;
  justify-contenet: center;
  background-color: #ffffff;
  color: black;
  text-decoration: none;
`;
const DefultBoard = styled(Board)`
  background-color: ${(props) => props.theme.whiteGray};
`;

const BoardImage = styled.div`
  border-radius: 10px;
  flex-basis: 25%;
  margin: 10px;
  background-image: url(${(props) =>
    process.env.PUBLIC_URL + props.$thumbnail});
  background-size: cover;
`;
const BoardTitle = styled.div`
  display: flex;
  flex-basis: 80%;
  font-size: 20px;
  font-weight: 900;
  border-radius: 10px;
  padding-left: 20px;
  align-items: center;
  justify-content: flex-start;
`;
const BoardTags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-itmes: center;
  flex-basis: 80%;
  font-size: 12px;
`;
const UserCount = styled.div`
  display: flex;
  flex-basis: 20%;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.whiteGray};
  border-radius: 5px;
  font-size: 18px;
`;
const Tag = styled.div`
  width: auto;
  padding: 12px;
  margin: 3px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.basic};
  color: #ffffff;
`;
const LowerRoomBox = styled.div`
  border-radius: 10px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-basis: 20%;
  justify-contenet: center;
`;
const RightRoomBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 75%;
  justify-contenet: center;
  font-size: 18px;
  font-weight: 700;
`;
