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

    <StyledTreeItemSection>
    <StyledInvItemBox>
      <StyledIdvItem src={item1} onClick={onImgClicked} acorns={acorns} />
      <StyledIdvItem src={item2} />
      {/* <StyledIdvItemTree src={item1} acorns={acorns}/> */}
    </StyledInvItemBox>
    </StyledTreeItemSection>

      <TreeImgSection>
        
          <TreeImgBox>
            <StyledIdvItemTree src={item1} acorns={acorns}/>
          </TreeImgBox>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          <TreeImgBox/>
          
        
      </TreeImgSection>
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
const TreeImgSection = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
background-color: purple;
flex-basis: 60%;

`
const StyledInvItemBox = styled.div`
width: 50px;
height: 50px;
cursor: pointer;
display: flex;
background-color: red;
`
const StyledIdvItem = styled.img`
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