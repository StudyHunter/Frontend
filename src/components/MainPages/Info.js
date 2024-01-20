import styled from 'styled-components';
const Info = () => {
  return <InfoBox>인포박스</InfoBox>;
};
export default Info;
const InfoBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 30%;
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
