import styled from 'styled-components';
import { Link } from 'react-router-dom';
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/Swiper.css';
import { Navigation } from 'swiper/modules';

//dymmy data
import tempRoomDatas from '../../json/RoomDummyData';
//슬라이드에 들어가는 방 개수
const ROOM_COUNT = 8;

const Room = () => {
  //방 정보 더미데이터
  const roomDatas = tempRoomDatas;
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
      //종료조건
      if (countTotal === roomDatas.length - 1) {
        swiper.push(<StyledSwiperSlide>{swiperSlide}</StyledSwiperSlide>);
        console.log(swiper);
        return swiper;
      }
      swiperSlide.push(
        <Board to="/" key={roomData.room_id}>
          <BoardImage $thumbnail={roomData.thumbnail}></BoardImage>
          <RightRoomBox>
            <BoardTitle>{roomData.title + '  ' + roomData.room_id}</BoardTitle>
            <LowerRoomBox>
              <BoardTags>
                {roomData.tags.map((tag, idx) => {
                  return <Tag key={idx}>{'#' + tag}</Tag>;
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
      countRoom++;
      countTotal++;
    }
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
  margin: 10px;
  display: flex;
  flex-basis: 70%;
  justify-contenet: center;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  border-radius: 10px;
  display: flex;
  align-itmes: start;
  flex-wrap: wrap;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;

const Board = styled(Link)`
  display: flex;
  flex-basis: 45%;
  height: 20%;
  margin: 10px;
  border-radius: 10px;
  justify-contenet: center;
  background-color: #ffffff;
  color: black;
  text-decoration: none;
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
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
  align-items: center;
  justify-content: center;
`;
const BoardTags = styled.div`
  display: flex;
  flex-basis: 60%;
`;
const UserCount = styled.div`
  display: flex;
  flex-basis: 40%;
  margin: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
const Tag = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 12px;
  margin: 3px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
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
