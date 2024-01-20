import styled from 'styled-components';
const Tree = () => {
  return <TreeBox>트리박스</TreeBox>;
};
export default Tree;
const TreeBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 70%;
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
