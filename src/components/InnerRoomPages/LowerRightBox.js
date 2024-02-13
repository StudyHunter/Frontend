import styled from 'styled-components';
import ChatComponent from '../Chat/ChatComponent';
const LowerRightBox = () => {
  return (
    <Layout>
      <ChatComponent />
    </Layout>
  );
};
export default LowerRightBox;

const Layout = styled.div`
  border-radius: 10px;
  display: flex;
  flex-basis: 35%;
  flex-direction: column;
`;
