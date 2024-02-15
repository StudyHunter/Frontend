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
      <UpperLayout>
        <StyledImage />
        <TextBox>
          <TextBoxFont>
            최대36자까지가능최대36자까지가능최대36자까지가능최대36까지가능
          </TextBoxFont>
        </TextBox>
      </UpperLayout>
      <LowerLayout>
        <InnerRoomUpperBox roomData={roomData} />
        <InnerRoomLowerBox>
          <LowerLeftBox />
          <LowerCenterBox />
          <LowerRightBox />
        </InnerRoomLowerBox>
      </LowerLayout>
    </Layout>
  );
};
export default InnerRoom;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
const UpperLayout = styled.div`
  margin: 0 30px 0 30px;
  display: flex;
  flex-basis: 10%;
  align-items: center;
`;
const LowerLayout = styled.div`
  border-radius: 10px;
  margin: 0px 30px 30px 30px;
  display: flex;
  flex-basis: 90%;
  flex-direction: column;
  background-color: rgba(224, 224, 224, 0.6); //#E0E0E0
`;
const InnerRoomLowerBox = styled.div`
  display: flex;
  flex-basis: 90%;
`;

const StyledImage = styled.div`
  width: 60px;
  height: 50px;
  background-image: url(${process.env.PUBLIC_URL + '/img/logo.png'});
  background-size: cover;
`;
const TextBox = styled.div`
  flex-basis: 95%;
  padding: 10px;
  border-radius: 10px;

  //텍스트 넘칠 때
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  text-overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const TextBoxFont = styled.div`
  color: #ff7a00;
  font-size: 25px;
  font-weight: 700;
`;
