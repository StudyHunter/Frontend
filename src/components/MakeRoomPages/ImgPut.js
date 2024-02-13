import React, { useState } from 'react';
import styled from 'styled-components'; 
import testImg from '../../img/leo.jpg';


function ImgPut({userImg, setUserImg}) {

  // console.log('imgput의 이미지' + userImg)
  // const [userImg, setUserImg] = useState(testImg);

  const onChangeImg = (e) => {
    const {files} = e.target;
    const uploadFiles = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFiles);
    reader.onloadend = () => {
      setUserImg(reader.result);
    }

  }
  
  return(
    <div>
      <StyledImgInput>
        <StyledImgContent>
          <StyledTestImg src={userImg} />
        </StyledImgContent>
        <StyledLabel htmlFor="file">
          <StyledText>이미지 불러오기</StyledText>
          <StyledInput type="file" id="file" name="file"  accept="image/*" onChange={onChangeImg} />
        </StyledLabel>
      </StyledImgInput>
      
    </div>
  )
}


const StyledImgInput = styled.div`
display: flex; 
flex-direction: column;
// height: 500px;
// widht: 500px;
`

const StyledLabel = styled.label`
display: flex;
justify-content: center;
width: 100%;
// width: 150px;
height: 100%;
cursor: pointer;
padding: 0 0 30px 0`

const StyledText = styled.div`
display: flex;
border-radius: 5px;
// width:  150px;
// height: 30px;
background: #FF7A00;
border: 1px solid #FF7A00;
cursor: pointer;
text-align: center;
margin: 10px;
padding: 20px;
color: white;


`

const StyledImgContent = styled.div`
display: flex;
height: 200px;
width: 200px;
padding: 5%;
overflow: hidden;
margin: 0 auto;
justify-content: center; 
padding: 10%;`



const StyledTestImg = styled.img`
display: flex;
height: 100%;
width: 100%;
border-radius: 10px;
object-fit: cover;

`

const StyledInput = styled.input`
display: none;
`
export default ImgPut;