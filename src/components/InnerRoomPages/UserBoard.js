import styled from 'styled-components';
const UserBoard = ({ userData }) => {
  return (
    <Board>
      <UserImage $user_img={userData.user_img} />
      <UserName>{userData.user_name}</UserName>
      <UserTime>{userData.study_time + '시간'}</UserTime>
      <UserTagWrapper>
        {userData.user_tags.map((user_tag) => {
          return <UserTag key={user_tag}>{user_tag}</UserTag>;
        })}
      </UserTagWrapper>
    </Board>
  );
};
export default UserBoard;

const Board = styled.div`
  height: 45%;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 160, 0, 0.2);
`;

const UserImage = styled.div`
  display: flex;
  flex-basis: 35%;
  width: 60%;
  border-radius: 70%;
  margin: 20px;
  background-image: url(${(props) => process.env.PUBLIC_URL + props.$user_img});
  background-size: cover;
`;
const UserName = styled.div`
  margin: 10px;
  font-size: 22px;
  font-weight: 700;
`;
const UserTime = styled.div`
  margin: 5px;
`;
const UserTagWrapper = styled.div`
  margin: 5px;
  display: flex;
`;
const UserTag = styled.div`
  padding: 10px;
  margin: 3px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  border: 2px solid rgba(255, 122, 0, 1);
  color: #ff7a00;
`;
