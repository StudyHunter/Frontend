import styled from 'styled-components';
import { useState, useEffect } from 'react';
const LowerLeftBox = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <Layout>
      <TokenBox>
        <h2>누적 토큰</h2>
        <h1>3</h1>
        <h2>개</h2>
      </TokenBox>
      <TimeBox>
        {`0${Math.floor((time / 3600000) % 24)}`.slice(-2)} :{' '}
        {`0${Math.floor((time / 60000) % 60)}`.slice(-2)} :{' '}
        {`0${Math.floor((time / 1000) % 60)}`.slice(-2)}
      </TimeBox>
      <MarginBox />
      {isRunning ? (
        <ControlTimeButton type="button" onClick={() => setIsRunning(false)}>
          일시정지
        </ControlTimeButton>
      ) : time > 0 ? (
        <ControlTimeButton type="button" onClick={() => setIsRunning(true)}>
          스터디 재개
        </ControlTimeButton>
      ) : (
        <ControlTimeButton type="button" onClick={() => setIsRunning(true)}>
          스터디 시작
        </ControlTimeButton>
      )}
      <SubmitButton
        type="button"
        onClick={() => {
          setTime(0);
          setIsRunning(false);
        }}
      >
        스터디 종료
      </SubmitButton>
    </Layout>
  );
};
export default LowerLeftBox;

const Layout = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  font-size: 25px;
`;
const TokenBox = styled.div`
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.whiteGray};
  h2 {
    font-size: 25px;
  }
  h1 {
    font-size: 30px;
  }
`;
const TimeBox = styled.div`
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-basis: 20%;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.whiteGray};
  font-size: 30px;
  font-weight: 700;
`;
const ControlTimeButton = styled.button`
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-basis: 10%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  background-color: #ff7a00;
  &:hover {
    background-color: rgba(255, 122, 0, 0.7);
  }
`;

const SubmitButton = styled.button`
  border-radius: 10px;
  margin: 20px;
  display: flex;
  flex-basis: 10%;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 20px;
  background-color: #ff7a00;
  &:hover {
    background-color: rgba(255, 122, 0, 0.7);
  }
`;
const MarginBox = styled.div`
  flex-basis: 20%;
`;
