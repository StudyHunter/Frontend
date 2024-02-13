import Info from '../MainPages/Info';
import MakeRoomComponent from '../MainPages/MakeRoomComponent';
import Tree from '../MainPages/Tree';
import styled from 'styled-components';
import { useMemo } from 'react';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const RightBox = () => {
  const memoizedRightBox = useMemo(() => {
    return (
      <Layout>
        <Info />
        <Tree />
        <MakeRoomComponent />
      </Layout>
    );
  }, []);
  return memoizedRightBox;
};

export default RightBox;
