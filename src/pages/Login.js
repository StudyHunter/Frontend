import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post('http://localhost:3000/login', {
    //   username,
    //   password,
    // });
    // const token = res.data.token;
    // localStorage.setItem('token', token);
    navigate('/Main');
  };
  return (
    <FormBox onSubmit={handleSubmit}>
      <StyledImage />
      <IdInput
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <PasswordInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <LoginButton type="submit">로그인</LoginButton>
      <SignInButton to="/SignIn">회원가입</SignInButton>
    </FormBox>
  );
};
export default Login;
const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const IdInput = styled.input``;
const PasswordInput = styled.input``;
const LoginButton = styled.button`
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

const SignInButton = styled(Link)`
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
const StyledImage = styled.div`
  margin: 0 30px 0 30px;
  width: 60px;
  height: 50px;
  background-image: url(${process.env.PUBLIC_URL + '/img/logo.png'});
  background-size: contain;
`;
