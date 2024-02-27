import LinkButton from '../components/Button/LinkButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SignUp = () => {
  const tempCategoryList = {
    프론트엔드: false,
    백엔드: false,
    앱개발: false,
    데이터사이언스: false,
    데브옵스: false,
    게임: false,
    시스템: false,
  };
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [categoryList, setCategoryList] = useState(tempCategoryList);
  const [isCheckedId, setIscheckedId] = useState(false);
  const [isCheckedName, setIsCheckedName] = useState(false);
  const [nameMessage, setNameMessage] = useState(' ');
  const [idMessage, setIdMessage] = useState(' ');

  const navigate = useNavigate();
  const handleCategoryClick = (e) => {
    const value = e.currentTarget.innerHTML;
    if (categoryList[value]) {
      setCategoryList((current) => {
        const newList = { ...current };
        newList[value] = false;
        return newList;
      });
    } else {
      setCategoryList((current) => {
        const newList = { ...current };
        newList[value] = true;
        return newList;
      });
    }
  };
  function makeCategoryBox(categoryList) {
    const result = [];
    for (const [key, value] of Object.entries(categoryList)) {
      result.push(
        <CategoryContent key={key} value={value} onClick={handleCategoryClick}>
          {key}
        </CategoryContent>
      );
    }
    return result;
  }
  const handleSubmit = async (e) => {
    //유효성 검사
    //checkForm();

    //server에 전송
    e.preventDefault();
    //밑에 말고 get 요청
    // const res = await axios.post('http://localhost:3000/login', {
    //   username,
    //   password,
    // });
    // const token = res.data.token;
    // localStorage.setItem('token', token);
    navigate('/');
  };

  //id 확인 GET 요청
  const checkID = async () => {
    try {
      // const response = await axios.get(
      //   `https://your-server.com/check-id/${id}`
      // );
      //response.data.isDuplicated
      if (false) {
        setIscheckedId(true);
        setIdMessage('이미 사용 중인 ID 입니다.');
      } else {
        setIdMessage('사용 가능한 ID 입니다.');
      }
    } catch (error) {
      console.error('ID 중복 확인 중 오류 발생:', error);
    }
  };

  //닉네임 확인 GET 요청
  const checkName = async () => {
    try {
      // const response = await axios.get(
      //   `https://your-server.com/check-id/${id}`
      // );
      //response.data.isDuplicated
      if (false) {
        setIsCheckedName(true);
        setNameMessage('이미 사용 중인 닉네임 입니다.');
      } else {
        setNameMessage('사용 가능한 닉네임 입니다.');
      }
    } catch (error) {
      console.error('닉네임 중복 확인 중 오류 발생:', error);
    }
  };

  return (
    <Layout>
      <LogoBox>
        <StyledImage />
      </LogoBox>
      <SignUpLayout>
        <SignUpBox>
          <SignUpText>SIGN UP</SignUpText>
          <Box>
            <TitleText>닉네임</TitleText>
            <InputLayout>
              <Input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <ValidationBox onClick={checkName}>확인</ValidationBox>
            </InputLayout>
            <CheckText>{nameMessage}</CheckText>
          </Box>
          <Box>
            <TitleText>아이디</TitleText>
            <InputLayout>
              <Input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <ValidationBox onClick={checkID}>확인</ValidationBox>
            </InputLayout>
            <CheckText>{idMessage}</CheckText>
          </Box>
          <Box>
            <TitleText>비밀번호</TitleText>
            <InputLayout>
              <Input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputLayout>
            <CheckText>
              {password.length < 6 ? '6자 이상 입력해주세요' : ''}
            </CheckText>
          </Box>
          <CategoryBox>{makeCategoryBox(categoryList)}</CategoryBox>
          <LinkButton basis="10" onClick={handleSubmit}>
            회원가입
          </LinkButton>
        </SignUpBox>
      </SignUpLayout>
    </Layout>
  );
};
export default SignUp;
const SignUpText = styled.div`
  display: flex;
  flex-basis: 20%;
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.basic};
`;
const CategoryContent = styled.button`
  padding: 15px;
  margin: 3px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 500;
  ${(props) => {
    if (!props.value) {
      return `
        background-color: #dadada;
        `;
    } else {
      return `
        background-color: #ff7a00;
        color:#ffffff;
        `;
    }
  }}
`;
const CategoryBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 25%;
  justify-contenet: center;
`;
const SignUpBox = styled.div`
  width: 35%;
  height: 75%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Layout = styled.div`
  display: flex;
  flex-basis: 100%;
`;
const LogoBox = styled.div`
  display: flex;
  flex-basis: 25%;
  background-color: ${(props) => props.theme.basic};
  justify-content: center;
  align-items: center;
`;
const SignUpLayout = styled.div`
  display: flex;
  flex-basis: 75%;
  justify-content: center;
  align-items: center;
`;
const StyledImage = styled.div`
  width: 200px;
  height: 160px;
  background-image: url(${(props) =>
    process.env.PUBLIC_URL + props.theme.whiteLogo});
  background-size: cover;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin: 10px;
`;
const Input = styled.input`
  flex-basis: 70%;
  border: 3px solid ${(props) => props.theme.basic};
  border-radius: 5px;
`;
const InputLayout = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: space-between;
`;
const ValidationBox = styled.button`
  display: flex;
  flex-basis: 20%;
  background-color: gray;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #ffffff;
  background-color: ${(props) => props.theme.basicGray};
  &:hover {
    background-color: ${(props) => props.theme.whiteGray};
  }
`;
const CheckText = styled.div`
  flex-basis: 10%;
  font-size: 15px;
`;
const TitleText = styled.div`
  flex-basis: 10%;
  font-size: 20px;
`;
