import styled from 'styled-components';
import userDatas from '../../DummyData/InnerRoomUserData';
import UserBoard from './UserBoard';
const LowerCenterBox = () => {
  return (
    <Layout>
      <UserBoard userData={userDatas[0]} />
      <UserBoard userData={userDatas[1]} />
      <UserBoard userData={userDatas[1]} />
      <UserBoard userData={userDatas[1]} />
      <UserBoard userData={userDatas[1]} />
      <UserBoard userData={userDatas[1]} />
    </Layout>
  );
};
export default LowerCenterBox;

const Layout = styled.div`
  border-radius: 10px;
  display: flex;
  flex-basis: 45%;
  border: 1px solid black;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
