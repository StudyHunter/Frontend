import styled from 'styled-components';

const Room = () => {
  //방 정보 더미데이터
  const roomDatas = [
    {
      room_id: 1,
      author: 'jongbin',
      title: '투썸에서 공부해요',
      expected_users: 6,
      expected_schedules: 60,
      tags: '프론트엔드',
      room_type: 1,
      room_status: 'open',
      thumbnail: '.../images/tempImage.jpg',
    },
    {
      room_id: 2,
      author: 'jongbin',
      title: '투썸에서 공부해요',
      expected_users: 6,
      expected_schedules: 60,
      tags: '프론트엔드',
      room_type: 1,
      room_status: 'open',
      thumbnail: '../images/tempImage.jpg',
    },
  ];

  const rooms = roomDatas.map((roomData) => (
    <Board
      key={roomData.room_id}
      //thumbnail={roomData.thumbnail}
      //title={roomData.title}
      //tags={roomData.tags}
      //room_status={roomData.room_status}
      //expected_user={roomData.expected_users}
    >
      게시판
      <BoardImage $thumbnail={roomData.thumbnail}></BoardImage>
    </Board>
  ));
  return <RoomBox>{rooms}</RoomBox>;
};
export default Room;

const RoomBox = styled.div`
  overflow-y: auto;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
  @media screen and (max-width: 1335px) {
    flex-basis: 75%;
  }
`;

const Board = styled.div`
  flex-basis: 45%;
  height: 20%;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  justify-contenet: center;
  background-color: #ffffff;
  @media screen and (max-width: 1335px) {
    flex-basis: 100%;
    height: 10%;
  }
`;
const BoardImage = styled.div`
  background-image: url(${(props) => props.$thumbnail});
  background-size: 100%;
`;
