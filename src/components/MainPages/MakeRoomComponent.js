import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MakeRoomComponent = () => {
  return (
    <MakeRoomButton to="../pages/MakeRoom">
      <MakeRoomButtonFont>방만들기</MakeRoomButtonFont>
    </MakeRoomButton>
  );
};
export default MakeRoomComponent;

const MakeRoomButton = styled(Link)`
  margin: 20px;
  padding: 30px;
  border-radius: 10px;
  background-color: rgba(10, 10, 35, 0.8); //#0a0a23
  flex-basis: 20%;
  text-align: center;
  &:hover {
    background-color: rgba(125, 125, 160, 0.8);
  }
  //반응형
  @media screen and (max-width: 900px) {
    flex-basis: 90%;
  }
`;
const MakeRoomButtonFont = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
