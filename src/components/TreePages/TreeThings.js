import { useState } from 'react';
import item1 from '../../img/tree_things/acorns.png';
import item2 from '../../img/tree_things/candle.png';
import item3 from '../../img/tree_things/candy.png';
import item4 from '../../img/tree_things/cat.png';
import item5 from '../../img/tree_things/cherry.png';
import item6 from '../../img/tree_things/cookies.png';
import item7 from '../../img/tree_things/fish.png';
import item8 from '../../img/tree_things/giftbox.png';
import item9 from '../../img/tree_things/rabbits.png';
import item10 from '../../img/tree_things/ribbon.png';
import item11 from '../../img/tree_things/snow.png';
import item12 from '../../img/tree_things/socks.png';
import item13 from '../../img/tree_things/socks.png';
import item14 from '../../img/tree_things/star.png';
import item15 from '../../img/tree_things/tree.png';
import item16 from '../../img/tree_things/wand.png';

import styled from 'styled-components';

const TreeThings = () => {

  const [acorns, setAcrons] = useState(true)

  const onImgClicked = () => {
    setAcrons(!acorns);

  }
  console.log(acorns)
  console.log(item1)
  return(
    <StyeldOverall>

    {/* 왼쪽에 놓일 아이템들 */}
    <StyledTreeItemSection>
    <StyledInvItemBox>
      <StyledIdvItem src={item1} onClick={onImgClicked} acorns={acorns} />
      <StyledIdvItem src={item2} />
      {/* <StyledIdvItemTree src={item1} acorns={acorns}/> */}
    </StyledInvItemBox>
    </StyledTreeItemSection>

    {/* 트리 이미지 */}
    <TreeImgSectionBox>
      <TreeImgSection image={item15}>
        
          <TreeImgBox></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item1} acorns={acorns}/></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          {/* <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/> */}

      </TreeImgSection>
      </TreeImgSectionBox>
    </StyeldOverall>
    
  )
}
const StyledTreeItemSection = styled.div`
background-color: yellow;
width: 200px;
height: 600px;
flex-basis: 30%;
display: flex;`

const StyeldOverall = styled.div`
display: flex;
flex-direction: row;`

const TreeImgBox = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
height: 50px;
width:50px;
background-color: white;
margin: 5px;
`

const TreeImgSectionBox = styled.div`
width: 500px;
height: 700px;
// background-color: yellow;
`
const TreeImgSection = styled.div`
padding: 4%;
background-image: url(${props => props.image});
background-size: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
background-color: purple;
flex-basis: 60%;
width: 100%;
height: 100%;

`
const StyledInvItemBox = styled.div`
width: 80px;
height: 80px;
cursor: pointer;
display: flex;
// background-color: red;
`
const StyledIdvItem = styled.img`
border-radius: 5px;
margin: 5px;
background-color: white;
padding: 7px;
display: flex;
width: 100%;
height: 100%;
opacity: ${props=>props.acorns ? '1' : '0.5'};
// display: ${props=>props.acorns ? 'block' : 'transparent'};
`
const StyledIdvItemTree = styled.img`
width: 100%;
height: 100%;
display: ${props=>props.acorns ? 'block' : 'none'}`

export default TreeThings;