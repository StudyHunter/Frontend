import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png'



function MainHeader() {
  return (
    <LOGO>
      <StyledImg className='logoImage' alt="logo" src={logo} />
      <StyledText>
        <StyledMenu>큐피 소개</StyledMenu>
        <StyledMenu>마이페이지</StyledMenu>
        <StyledMenu>문의하기</StyledMenu>
      </StyledText>

    </LOGO>
  )
}

const LOGO = styled.div`
display: inline;
`;

const StyledImg = styled.img`
width: 139px;
height: 77px;
padding: 40px 0 0 100px;
`;

const StyledText = styled.div`
position: absolute;
width: 488px;
height: 19px;
left: 262px;
top: 71px;


`

const StyledMenu = styled.div`
padding: 10px 30px 0 30px;
color: #FF7A00;
display: inline;
font-family: 'Inter', sans-serif;
`

export default MainHeader;