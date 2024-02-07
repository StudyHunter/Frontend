import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 방만들기 버튼
// 버튼을 누르면 {이미지, 방 제목, 인원 수, 방장 정보가 넘어간다.}

const MakeRoomComponent = () => {
  return (
    <MakeRoomButton to="../pages/MakeRoom">
      <MakeRoomButtonFont>방만들기</MakeRoomButtonFont>
    </MakeRoomButton>
  );
};
export default MakeRoomComponent;

const MakeRoomButton = styled(Link)`
  margin: 20px 10px 0 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(10, 10, 35, 0.8); //#0a0a23
  flex-basis: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
    background-color: rgba(125, 125, 160, 0.8);
  }
`;
const MakeRoomButtonFont = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;