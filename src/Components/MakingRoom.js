import React from 'react';
import styled from 'styled-components';

function MakingRoom() {
  return (
    <div>
      <StyledMakeRoom>
        방 만들기
      </StyledMakeRoom>
      <StyledInputRoom>
        <FirstSection>
          {/* <StyledImgBox>
            이미지 추가
          </StyledImgBox>
          <StyledPlaceBox>
            스터디 장소
          </StyledPlaceBox>
          <StyledPlaceBox>
            스터디 시간 
          </StyledPlaceBox> */}
        </FirstSection>
        <SecondSection>
          {/* <StyledRoomName>
            방제목
          </StyledRoomName> */}
          다 사라졌는데요
        </SecondSection>
        <ThirdSection>

        </ThirdSection>
      </StyledInputRoom>
    </div>
  )
}

const StyledMakeRoom = styled.div`
padding: 50px 0 30px 100px;
color: #FF7A00;
font-family: 'Inter', sans-serif;
`

const StyledInputRoom = styled.div`
display: flex;
space-between: 10px;
background-color: red;
width: 90%;
height: 650px;
margin: 20px 100px;
`

const FirstSection = styled.div`
flex-grow: 2;
//position: absolute;
width: 20px;
height: 100%;
background-color: orange;
//margin: 20px 20px 20px 100px;
`

const StyledImgBox = styled.div`
border-radius: 5px;
color: red;
background-color: #d9d9d9;
height: 236px;
width: 220px;
// margin: 20px 20px 20px 100px;
margin: 10px;
text-align: center;
`
const StyledPlaceBox = styled.div`
border-radius: 5px;
width: 220px;
height: 100px;
background-color: #d9d9d9;
// margin: 20px 20px 20px 100px
margin: 10px;`

const SecondSection = styled.div`
flex-grow:3;
//position: absolute;
width: 10px;
height: 100%;
background-color: yellow;`

const StyledRoomName = styled.div`
width: 652px;
height: 101px;
background-color: #d9d9d9;`

const ThirdSection = styled.div`
flex-grow: 1;
width: 20px;
height: 100%;
background-color: green;
`

export default MakingRoom;
