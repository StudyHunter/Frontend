import Info from '../MainPages/Info';
import MakeRoomComponent from '../MainPages/MakeRoomComponent';
import Tree from '../MainPages/Tree';
import styled from 'styled-components';
import { useMemo } from 'react';

const Layout = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
`;

const VoidBox = styled.div`
  flex-basis: 40%;
`;

const RightBox = () => {
  const memoizedRightBox = useMemo(() => {
    return (
      <Layout>
        <Info />
        <VoidBox />
        <Tree />
        <MakeRoomComponent />
      </Layout>
    );
  }, []);
  return memoizedRightBox;
};

export default RightBox;
