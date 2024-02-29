import styled from 'styled-components';

const InnerRoomUpperBox = ({ roomData }) => {
  return (
    <UpperBox>
      <UpperBoxImage $thumbnail={roomData.thumbnail} />
      <UpperBoxTitle>{roomData.title}</UpperBoxTitle>
    </UpperBox>
  );
};
const UpperBox = styled.div`
  border-radius: 10px;
  display: flex;
  flex-basis: 10%;
  margin: 10px;
  justify-contenet: start;
  align-items: center;
`;
const UpperBoxImage = styled.div`
  display: flex;
  height: 75px;
  width: 75px;
  border-radius: 10px;
  margin: 10px;
  background-image: url(${(props) =>
    process.env.PUBLIC_URL + props.$thumbnail});
  background-size: cover;
`;
const UpperBoxTitle = styled.div`
  margin: 10px;
  border-radius: 10px;
  flex-basis: 80%;
  //텍스트 넘칠 때
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  text-overflow: hidden;
  align-items: center;
  font-size: 23px;
  font-weight: 700;
`;

export default InnerRoomUpperBox;
