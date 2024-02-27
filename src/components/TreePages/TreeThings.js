import { useEffect, useState } from 'react';
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
import item13 from '../../img/tree_things/wand.png';
import item14 from '../../img/tree_things/star.png';
import item15 from '../../img/tree_things/tree.png';


import styled from 'styled-components';


// 12개 boolean 배열 

const TreeThings = () => {

  // const [acorns, setAcrons] = useState('true')
  const [itemState, setItemState] = useState({
    n1: false,
    n2: false,
    n3: false,
    n4: false,
    n5: false,
    n6: false,
    n7: false,
    n8: false,
    n9: false,
    n10: false,
    n11: false,
    n12: false,
    n13: false,
  })

  const onImgClicked = (e) => {
    setItemState({
      ...itemState,
      [e]: !itemState[e],
    });
  };

  //console.log(itemState.n1);
  return(
    <StyeldOverall>

    {/* 왼쪽에 놓일 아이템들 */}
    <StyledTreeItemSection>
    <StyledTreeItemSectionBox>
      <StyledInvItemBox><StyledIdvItem src={item1} onClick={() => onImgClicked('n1')} items={itemState.n1} /></StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item2} onClick={() => onImgClicked('n2')} items={itemState.n2}/></StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item3} onClick={() => onImgClicked('n3')} items={itemState.n3}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item4} onClick={() => onImgClicked('n4')} items={itemState.n4}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item5} onClick={() => onImgClicked('n5')} items={itemState.n5}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item6} onClick={() => onImgClicked('n6')} items={itemState.n6}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item7} onClick={() => onImgClicked('n7')} items={itemState.n7}/> </StyledInvItemBox>
    </StyledTreeItemSectionBox>
    <StyledTreeItemSectionBox>
      <StyledInvItemBox><StyledIdvItem src={item8} onClick={() => onImgClicked('n8')} items={itemState.n8}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item9} onClick={() => onImgClicked('n9')} items={itemState.n9}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item10} onClick={() => onImgClicked('n10')} items={itemState.n10}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item11} onClick={() => onImgClicked('n11')} items={itemState.n11}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item12} onClick={() => onImgClicked('n12')} items={itemState.n12}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item13} onClick={() => onImgClicked('n13')} items={itemState.n13}/> </StyledInvItemBox>
      <StyledInvItemBox><StyledIdvItem src={item14} onClick={() => onImgClicked('n14')} items={itemState.n14}/> </StyledInvItemBox>
    </StyledTreeItemSectionBox>
      {/* <StyledIdvItemTree src={item1} acorns={acorns}/> */}
   
    </StyledTreeItemSection>

    {/* 트리 이미지 */}
    <TreeImgSectionBox>
      <TreeImgSection image={item15}>
        
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox><StyledIdvItemTree src={item5} $items={item5} acorns={itemState.n5}/>
            </TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox></TreeImgBox><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item4} $items={item4} acorns={itemState.n4}/></TreeImgBox><TreeImgBox/>
          <TreeImgBox>
          <StyledIdvItemTree src={item6} $items={item6} acorns={itemState.n6}/>
          </TreeImgBox>
          <TreeImgBox></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox>
            <StyledIdvItemTree src={item3} $items={item3} acorns={itemState.n3}/>
          </TreeImgBox><TreeImgBox/>
          <TreeImgBox>
            <StyledIdvItemTree src={item2} acorns={itemState.n2}/>
          </TreeImgBox>
          <TreeImgBox/>
          <TreeImgBox>
            <StyledIdvItemTree src={item14} acorns={itemState.n14}/>
          </TreeImgBox>
          <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item7} $items={item7} acorns={itemState.n7}/></TreeImgBox><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item12} $items={item12} acorns={itemState.n12}/></TreeImgBox>
          <TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item8} $items={item8} acorns={itemState.n8}/></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox>
          <StyledIdvItemTree src={item1} acorns={itemState.n1}/>
          </TreeImgBox>
          <TreeImgBox></TreeImgBox><TreeImgBox><StyledIdvItemTree src={item15} $items={item15} acorns={itemState.n15}/></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item9} $items={item9} acorns={itemState.n9}/></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          <TreeImgBox><StyledIdvItemTree src={item10} $items={item10} acorns={itemState.n10}/></TreeImgBox><TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item13} $items={item13} acorns={itemState.n13}/></TreeImgBox><TreeImgBox/>
          <TreeImgBox/><TreeImgBox><StyledIdvItemTree src={item11} $items={item11} acorns={itemState.n11}/></TreeImgBox><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/>
          {/* <TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/><TreeImgBox/> */}

      </TreeImgSection>
      </TreeImgSectionBox>
    </StyeldOverall>
    
  )
}



const StyeldOverall = styled.div`
display: flex;
width: 100%;
flex-direction: row;`

const StyledTreeItemSection = styled.div`
display: flex;
// background-color: yellow;
width: 100%;
height: 100%;
flex-basis: 30%;
padding: 0 2% 0 0;
`

const StyledTreeItemSectionBox = styled.div`
display: flex;
// background-color: blue;
flex-direction: column;
padding: 0 10px 0 0`

const TreeImgBox = styled.div`
display: flex;
height: 50px;
width:50px;
// background-color: blue;
margin: 5px;
`

const TreeImgSectionBox = styled.div`
padding: 10px;
display: flex;
width: 100%;
height: 100%;
// background-color: black;
`
const TreeImgSection = styled.div`
padding: 10px 0 0 5px;
margin: 0 0 0 15%;;
background-image: url(${props => props.image});
background-size: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
// background-color: purple;
flex-basis: 60%;
width: 100%;
height: 100%;

`
const StyledInvItemBox = styled.div`
width: 60px;
height: 60px;
cursor: pointer;
display: flex;
margin: 15px;
// background-color: red;

`
const StyledIdvItem = styled.img`
border-radius: 5px;
margin: 5px;
background-color: rgba(255, 138, 0);
padding: 7px;
width: 100%;
height: 100%;
opacity: ${props=> props.items ? '0.5' : '1'};

`
const StyledIdvItemTree = styled.img`
width: 100%;
height: 100%;
display: ${props=>props.acorns ? 'block' : 'none'}
`

export default TreeThings;