import React, { useState } from 'react';
import styled from 'styled-components';
import ImgPut from '../Components/ImgPut';
import Info from '../Components/info';
import MakeRoomComponent from './MakeRoomComponent';
import tempImg from '../img/logoWithBk2.png';
import un2 from '../img/uncheck2.png';
import un3 from '../img/unchecked3.png'
import un4 from '../img/unchecked4.png'
import un5 from '../img/unchecked5.png'
import un6 from '../img/unchecked6.png'
import ch2 from '../img/checked2.png';
import ch3 from '../img/checked3.png'
import ch4 from '../img/checked4.png'
import ch5 from '../img/checked5.png'
import ch6 from '../img/checked6.png'


// 할일: 방만들기 버튼 누르면 userImg, roomTitle, member 넘어감. + 페이지 이동

function MakingRoom() {

  const [userImg, setUserImg] = useState(tempImg);
  const [roomTitle, setRoomTitle] = useState('');
  const [member, setMember] = useState('2');

  const onTitleChange = (e) => {
    // console.log(e.target.value);
    setRoomTitle(e.target.value)

  }
  const onRadioChange = (e) => {
    // console.log(e.target.id);
    setMember(e.target.id);
  }

  return (
    <div>
      <StyledMakeRoom>
        방 만들기
      </StyledMakeRoom>
      <StyledInputRoom>
      
        <FirstSection>
        <ImgPut userImg={userImg} setUserImg={setUserImg}></ImgPut>
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
          <SecondChildSection>
            방 제목
            <StyledRadioButtons>
            <StyledTitleInput onChange={onTitleChange} type="text" placeholder='방 제목' />
            </ StyledRadioButtons>

          </SecondChildSection>
          <SecondChildSection>
            인원 수
            <StyledRadioButtons>
              <StyledRadio htmlFor="2">
                <StyledMember image={ch2} unimage={un2} type="radio" checked={member === "2"} id="2" name="radios" onChange={onRadioChange} />

              </StyledRadio>
              <StyledRadio htmlFor="3">
                <StyledMember image={ch3} unimage={un3} type="radio" checked={member === "3"} id="3" name="radios" onChange={onRadioChange} />

              </StyledRadio>
              <StyledRadio htmlFor="4">
                <StyledMember image={ch4} unimage={un4} type="radio" checked={member === "4"} id="4" name="radios" onChange={onRadioChange} />

              </StyledRadio>
              <StyledRadio htmlFor="5">
                <StyledMember image={ch5} unimage={un5} type="radio" checked={member === "5"} id="5" name="radios" onChange={onRadioChange} />

              </StyledRadio>
              <StyledRadio htmlFor="6">
                <StyledMember image={ch6} unimage={un6} type="radio" checked={member === "6"} id="6" name="radios" onChange={onRadioChange} />

              </StyledRadio>
          </StyledRadioButtons>
          </SecondChildSection>
          {/* <StyledRoomName>
            방제목
          </StyledRoomName> */}
        </SecondSection>
        <ThirdSection>
          <Info />
          <MakeRoomComponent/>
        </ThirdSection>
        </StyledInputRoom>

      
    </div>
  )
}

const StyledTitleInput = styled.input`
appearance: none;
border-width: 0 0 3px;
border-color: orange;
outline: none;
height: 30px;
width: 90%;
background-color: #FFF0E3;
padding: 5px;
border-radius: 3px;
`;

// 제목 잘못 지음
// 방 제목 input, 라디오 버튼들 묶어주는 
const StyledRadioButtons = styled.div`
display: flex;
padding: 20px 0 0 0`

const StyledMember = styled.input`
margin: 10px;
appearance: none;
width: 3rem;;
height: 2.9rem;
border-radius: 0.35rem;
background-image: url(${(props) => (props.unimage)});
background-size: 100%;

&:checked {
  border-color: transparent;
  background-image: url(${(props) => (props.image)});
  background-size: 100%;
}
`

const StyledRadio = styled.label`
display: inline-flex;

align-items: center;
user-select: none;`


const SecondChildSection = styled.div`
flex-direction: row;
flex-basis: 50%;
padding: 20px;
// margin: 5%;
border-radius: 10px;
background-color: #FFF0E3;

&:first-child {
  margin: 0 0 5% 0;
}
`


const StyledMakeRoom = styled.div`
padding: 30px 0 30px 80px;
color: #FF7A00;
font-family: 'Inter', sans-serif;
`

const StyledInputRoom = styled.div`
display: flex;
space-between: 10px;
// background-color: red;
width: 90%;
height: 650px;
margin: 0 5% 5% 5% ;
`

const FirstSection = styled.div`
flex-basis: 25%;
width: 100%;
height: 100%;
background-color: #FFF0E3;
margin: 0 10px;
border-radius: 10px;
padding:
`
const SecondSection = styled.div`
display: flex;
flex-direction: column;
flex-basis: 45%;
width: 100%;
height: 100%;
background-color: white;
margin: 0 10px;
border-radius: 10px;
`

const StyledRoomName = styled.div`
width: 652px;
height: 101px;
background-color: #E0E0E0;`

const ThirdSection = styled.div`
display: flex;
flex-direction: column;
flex-basis: 30%;
// width: 20px;
// height: 100%;
// background-color: green;
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
margin: 10px;`




export default MakingRoom;
