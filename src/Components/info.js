import styled from 'styled-components';
import testUserImg from '../img/leo.jpg';


//DummyData
// import InfoDummyData from '../../DummyData/InfoDummyData';


const Info = () => {

  const InfoDummyData = 
  {
      user_img: testUserImg,
      user_name: 'yelim',
      study_time: 21,
      user_tags: ['프론트엔드', '백엔드'],
  
  }

  return (
    <InfoBox>
      <InfoImgBox>
        <InfoImg image={InfoDummyData.user_img} />
      </InfoImgBox>
      <UserName>
        <p>{InfoDummyData.user_name}</p>
      </UserName>
      <StudyTime>
        <p>{InfoDummyData.study_time + '시간\u00a0'}</p>
        <p>공부했어요</p>
      </StudyTime>
      <InfoTags>
        {InfoDummyData.user_tags?.map((tag, idx) => {
          return <Tag key={idx}>{'#' + tag}</Tag>;
        })}
      </InfoTags>
    </InfoBox>
  );
};

export default Info;
const InfoBox = styled.div`
  border-radius: 10px;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-basis: 80%;
  flex-direction: column;
  justify-contenet: center;
  background-color:  #FFF0E3; 
  // rgba(217, 217, 217, 0.6); //#d9d9d9
  font-size: 22px;
  font-weight: 700;
`;

const InfoImgBox = styled.div`
  padding: 10px;
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  // align-items: center;

  width: 400px;
  height: 100px;
  overflow: hidden;
  margin: 0 auto;
`;

const InfoImg = styled.div`

  display: flex;
  height: 100%;
  width: 100%;
  flex-basis: 58%;
  border-radius: 20%;
  margin: 10px;
  background-image: url(${(props) => (props.image)});
  background-size: cover;
`;

const UserName = styled.div`
  font-size: 30px;
  display: flex;
  flex-vasis: 14%;
  justify-content: center;
  align-items: center;
`;

const InfoTags = styled.div`
  display: flex;
  flex-basis: 14%;
  justify-content: center;
  align-items: center;
`;

const StudyTime = styled.div`
  display: flex;
  flex-basis: 14%;
  justify-content: center;
  align-items: center;
  :first-child {
    color: rgba(10, 10, 35, 1);
    font-size: 25px;
  }
`;

const Tag = styled.div`
  padding: 15px;
  margin: 3px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  background-color: rgba(10, 10, 35, 0.8);
`;