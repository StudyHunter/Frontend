import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {createGlobalStyle} from "styled-components";
import MainHeader from '../Components/MainHeader';
import MakingRoom from '../Components/MakingRoom';

const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Inter', sans-serif;
}`;

function MakeRoom() {
  return(
    <div>
      <MainHeader />
      <MakingRoom />
    </div>
  )
}


export default MakeRoom; 