import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MakeRoomComponent = () => {
  return (
    <Link to="../pages/MakeRoom">
      <MakeRoomButton>
        <MakeRoomButtonFont>방만들기</MakeRoomButtonFont>
      </MakeRoomButton>
    </Link>
  );
};
export default MakeRoomComponent;

const MakeRoomButton = styled.button`
  width: 180px;
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(10, 10, 35, 0.8);
  //background-color: #0a0a23;
  flex-grow: 1;
  &:hover {
    background-color: rgba(125, 125, 160, 0.8);
  }
`;
const MakeRoomButtonFont = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
