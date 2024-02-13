import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import InnerRoomUpperBox from '../components/InnerRoomPages/InnerRoomUpperBox';
import LowerLeftBox from '../components/InnerRoomPages/LowerLeftBox';
import LowerCenterBox from '../components/InnerRoomPages/LowerCenterBox';
import LowerRightBox from '../components/InnerRoomPages/LowerRightBox';
const InnerRoom = () => {
  const location = useLocation();
  const roomData = location.state;

  return (
    <Layout>
      <InnerRoomUpperBox roomData={roomData} />
      <InnerRoomLowerBox>
        <LowerLeftBox />
        <LowerCenterBox />
        <LowerRightBox />
      </InnerRoomLowerBox>
    </Layout>
  );
};
export default InnerRoom;

const Layout = styled.div`
  border-radius: 10px;
  margin: 30px;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
const InnerRoomLowerBox = styled.div`
  display: flex;
  flex-basis: 90%;
`;
