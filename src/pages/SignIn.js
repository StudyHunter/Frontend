import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
const SignIn = () => {
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
  return (
    <SignInBox onSubmit={handleSubmit}>
      <IdBox>
        <p>아이디</p>
        <IdInput
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </IdBox>
      <PasswordBox>
        <p>비밀번호</p>
        <PasswordInput
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </PasswordBox>
      <NameBox>
        <p>닉네임</p>
        <NameInput
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </NameBox>
      <CategoryBox>{makeCategoryBox(categoryList)}</CategoryBox>
      <SubmitButton type="submit">회원가입</SubmitButton>
    </SignInBox>
  );
};
export default SignIn;
const IdBox = styled.div`
  display: flex;
`;
const IdInput = styled.input``;
const PasswordBox = styled.div`
  display: flex;
`;
const PasswordInput = styled.input``;
const NameBox = styled.div`
  display: flex;
`;
const NameInput = styled.input``;
const CategoryContent = styled.button`
  padding: 15px;
  margin: 3px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  ${(props) => {
    if (!props.value) {
      return `
        background-color: rgba(10, 10, 35, 0.8);
        // &:hover {
        //   background-color: rgba(125, 125, 160, 0.8);
        // }
        `;
    } else {
      return `
        background-color: rgba(125, 125, 160, 0.8);
        // &:hover {
        //   background-color: rgba(10, 10, 35, 0.8);
        // }
        `;
    }
  }}
`;
const CategoryBox = styled.div`
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  justify-contenet: center;
  background-color: rgba(217, 217, 217, 0.6); //#d9d9d9
`;
const SignInBox = styled.form`
  display: flex;
  flex-direction: column;
`;
const SubmitButton = styled.button`
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
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
