import styled from 'styled-components';

//DummyData
import InfoDummyData from '../../DummyData/InfoDummyData';

const Info = () => {
  return (
    <InfoBox>
      <LeftBox>
        <InfoImg $user_img={InfoDummyData.user_img} />
      </LeftBox>
      <RightBox>
        <UserName>{InfoDummyData.user_name}</UserName>
        <StudyBox>
          <StudyTime>
            <div>공부 시간{'\u00a0'}</div>
            <div>{InfoDummyData.study_time + '시간'}</div>
          </StudyTime>
          <StudyToken>
            <div>토큰 개수{'\u00a0'}</div>
            <div>{InfoDummyData.user_token + '개'}</div>
          </StudyToken>
        </StudyBox>
        <InfoTags>
          {InfoDummyData.user_tags.map((tag, idx) => {
            return <Tag key={idx}>{tag}</Tag>;
          })}
        </InfoTags>
      </RightBox>
    </InfoBox>
  );
};

export default Info;
const InfoBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-basis: 40%;
  justify-contenet: center;
  border: 1px solid ${(props) => props.theme.whiteGray};
`;

const LeftBox = styled.div`
  padding: 10px;
  display: flex;
  flex-basis: 40%;
  justify-content: center;
  align-items: center;
`;
const RightBox = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: center;
  flex-direction: column;
`;
const InfoImg = styled.div`
  display: flex;
  height: 70%;
  flex-basis: 100%;
  border-radius: 10%;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.$user_img});
  background-size: cover;
`;

const UserName = styled.div`
  margin: 10px;
  font-size: 28px;
  align-items: center;
`;

const InfoTags = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
`;

const StudyBox = styled.div`
  margin: 10px;
`;

const StudyTime = styled.div`
  display: flex;
  align-items: center;
  :first-child {
    font-size: 15px;
    font-weight: 900;
  }
`;
const StudyToken = styled.div`
  display: flex;
  align-items: center;
  :first-child {
    font-size: 15px;
    font-weight: 900;
  }
`;

const Tag = styled.div`
  padding: 15px;
  margin: 3px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  background-color: ${(props) => props.theme.basic};
`;
