import styled from 'styled-components';
import LinkButton from '../components/Button/LinkButton';
import SubmitButton from '../components/Button/SubmitButton';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await axios.post('http://49.50.175.93:8080/user/login', {
    //   email: userId,
    //   password: password,
    // });
    // const token = res.data.token;
    // localStorage.setItem('token', token);
    navigate('/Main');
  };
  return (
    <Layout>
      <LogoBox>
        <StyledImage />
      </LogoBox>
      <FormLayout>
        <FormBox onSubmit={handleSubmit}>
          <LoginText>LOGIN</LoginText>
          <IdBox>
            <p>ID</p>
            <IdInput
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </IdBox>
          <PasswordBox>
            <p>PASSWORD</p>
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </PasswordBox>
          <SubmitButton basis="12" type="submit">
            로그인
          </SubmitButton>
          <LinkButton basis="10" address="/SignIn">
            회원가입
          </LinkButton>
        </FormBox>
      </FormLayout>
    </Layout>
  );
};
export default Login;
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
const FormLayout = styled.div`
  display: flex;
  flex-basis: 75%;
  justify-content: center;
  align-items: center;
  p {
    margin: 0px;
    font-size: 20px;
  }
`;
const FormBox = styled.form`
  width: 30%;
  height: 60%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const LoginText = styled.div`
  display: flex;
  flex-basis: 20%;
  font-size: 40px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.basic};
`;
const IdBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin: 10px;
`;
const IdInput = styled.input`
  flex-basis: 40%;
  border: 3px solid ${(props) => props.theme.basic};
  border-radius: 5px;
`;
const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  margin: 10px;
`;
const PasswordInput = styled.input`
  flex-basis: 40%;
  border: 3px solid ${(props) => props.theme.basic};
  border-radius: 5px;
`;

const StyledImgBox = styled.div`
  width: 200px;
  height: 180px;
  padding: 20px;
`;

const StyledImage = styled.div`
  width: 200px;
  height: 160px;
  background-image: url(${(props) =>
    process.env.PUBLIC_URL + props.theme.whiteLogo});
  background-size: cover;
`;
