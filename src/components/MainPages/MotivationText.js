import styled from 'styled-components';

const MotivationText = () => {
  return (
    <TextBox>
      <TextBoxFont>
        최대36자까지가능최대36자까지가능최대36자까지가능최대36까지가능
      </TextBoxFont>
    </TextBox>
  );
};
export default MotivationText;

const TextBox = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.7);
  flex-basis: 50%;

  //텍스트 넘칠 때
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  text-overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const TextBoxFont = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
