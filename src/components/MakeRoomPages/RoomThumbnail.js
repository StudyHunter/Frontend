import { useState } from 'react';
import thumb1 from '../../img/thumbnail/thumbnail_type1_coding.jpg';
import thumb2 from '../../img/thumbnail/thumbnail_type2_coding.jpg'
import thumb3 from '../../img/thumbnail/thumbnail_type3_meeting.jpg'
import thumb4 from '../../img/thumbnail/thumbnail_type4_bookReview.jpg'
import thumb5 from '../../img/thumbnail/thumbnail_type5_bookReview.jpg'
import thumb6 from '../../img/thumbnail/thumbnail_type6_design.jpg'
import styled from 'styled-components';

const RoomThumbnail = ({thumb, setThumb}) => {

  const thumbnails = [1, 2, 3, 4, 5, 6];
  // const [thumbnail,setThumbnails] = useState(thumbnails.reduce((acc, thumbImg) => ({...acc, [thumbImg]: false}), {}));

  // const onThumbnailChecked = (thumbImg) => {
  //   setThumbnails((prevThumbImg) => ({
  //     ...prevThumbImg,
  //     [thumbImg] : !prevThumbImg[thumbImg],
  //   }));
  // };

  
  const onthumbChange = (e) => {
    setThumb(e.target.id);
  }

  return (
    <>
    {/* <div>
      {thumbnails.map((thumbImg) => (
        <div key={thumbImg}>
          <input name='thumb1' id={thumbImg} type='checkbox' onChange={() => onThumbnailChecked(thumbImg)} checked={thumbnail[thumbImg]}/>
          <label htmlFor={thumbImg}>{thumbnail[thumbImg] && <span style={ {display: 'none'}}>{thumbImg}</span>}{!thumbnail[thumbImg] && thumbImg}</label>
        </div>
      ))}
      <div>{Object.entries(thumbnail).map(([thumbImg, isChecked]) => (
        <p key={thumbImg}>
          {thumbImg} : {isChecked.toString()}
        </p>
      ))}
      </div>
    </div> */}

    <StyledthumbButtons>
      <StyledThumbnailRow>
        <StyledThumb htmlFor='1'>
          <StyledImg image={thumb1} type="radio" checked={thumb === "1"} id="1" name="roomThumbnail" onChange={onthumbChange} />
        </StyledThumb>
        <StyledThumb htmlFor='2'>
          <StyledImg image={thumb2} type="radio" checked={thumb === "2"} id="2" name="roomThumbnail" onChange={onthumbChange} />
        </StyledThumb>
      
     
      <StyledThumb htmlFor='3'>
        <StyledImg image={thumb3} type="radio" checked={thumb === "3"} id="3" name="roomThumbnail" onChange={onthumbChange} />
      </StyledThumb>
      </StyledThumbnailRow>
      <StyledThumbnailRow>
      <StyledThumb htmlFor='4'>
        <StyledImg image={thumb4} type="radio" checked={thumb === "4"} id="4" name="roomThumbnail" onChange={onthumbChange} />
      </StyledThumb>
      
      <StyledThumb htmlFor='5'>
        <StyledImg image={thumb5} type="radio" checked={thumb === "5"} id="5" name="roomThumbnail" onChange={onthumbChange} />
      </StyledThumb>
      <StyledThumb htmlFor='6'>
        <StyledImg image={thumb6} type="radio" checked={thumb === "6"} id="6" name="roomThumbnail" onChange={onthumbChange} />
      </StyledThumb>
      </StyledThumbnailRow>
    </StyledthumbButtons>
    </>
  )
}

const StyledThumbnailRow = styled.div`
display: flex;
flex-direction: column;
`

const StyledthumbButtons = styled.div`
display: flex;
padding: 20px 0 0 0;
`

const StyledThumb = styled.label`
display: inline-flex;
align-items: center;
user-select: none;
padding: 0 10px 10px 10px;
`


const StyledImg = styled.input`
border-radius: 20px;
width: 12rem;
height: 12rem;
appearance: none;
background-image: url(${(props) => (props.image)});
background-size: 100%;
border-color: transparent;

&:checked {
  border: 7px solid rgba(255, 138,0);
  background-size: 100%;
  // background-image: none;
}

&:hover{
  cursor: pointer;
  border: 3px solid rgba(255, 138,0.5) ;
}

`



export default RoomThumbnail;
