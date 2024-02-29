import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import InnerRoomUpperBox from '../components/InnerRoomPages/InnerRoomUpperBox';
import LowerLeftBox from '../components/InnerRoomPages/LowerLeftBox';
import LowerCenterBox from '../components/InnerRoomPages/LowerCenterBox';
import LowerRightBox from '../components/InnerRoomPages/LowerRightBox';
const InnerRoom = () => {
  const location = useLocation();
  console.log(' ', location);
  const roomData = location.state;

  return (
    <Layout>
      <UpperLayout>
        <StyledImgBox>
          <StyledImage />
        </StyledImgBox>
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
  display: flex;
  flex-basis: 15%;
  align-items: center;
`;
const LowerLayout = styled.div`
  border-radius: 10px;
  margin: 0px 30px 30px 30px;
  display: flex;
  flex-basis: 90%;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.whiteGray};
`;
const InnerRoomLowerBox = styled.div`
  display: flex;
  flex-basis: 90%;
`;

const StyledImage = styled.div`
  margin: 0 30px 0 30px;
  flex-basis: 10%;
  width: 100%;
  height: 100%;
  background-image: url(${process.env.PUBLIC_URL + '/img/logo.svg'});
  background-size: cover;
`;
const StyledImgBox = styled.div`
  width: 120px;
  height: 100px;
  padding: 20px;
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
  margin-left: 30px;
`;

const TextBoxFont = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
