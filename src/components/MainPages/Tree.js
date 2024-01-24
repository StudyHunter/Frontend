import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Tree = () => {
  return (
    <TreeButton to="../pages/MakeRoom">
      <TreeButtonFont>트리 꾸미기</TreeButtonFont>
    </TreeButton>
  );
};
export default Tree;

const TreeButton = styled(Link)`
  margin: 10px;
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
const TreeButtonFont = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;
