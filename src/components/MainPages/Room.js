import styled from 'styled-components';
const Room = () => {
  return (
    <RoomBox>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
      <Board>게시판</Board>
    </RoomBox>
  );
};
export default Room;

const RoomBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: column;
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;

const Board = styled.div`
  flex-basis: 19%;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  justify-contenet: center;
  background-color: #ffffff;
  @media screen and (max-width: 565px) {
    flexbasis: 100%;
  }
`;
