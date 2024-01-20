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
  margin: 20px;
  padding: 30px;
  // border: 2px solid black;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.7);
  //flex-grow: 1;
  flex-basis: 80%;

  //텍스트 넘칠 때
  overflow: hidden;
  white-space: nowrap;
  text-overflow: hidden;

  //반응형
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const TextBoxFont = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
