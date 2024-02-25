import Info from '../MainPages/Info'
import styled from 'styled-components';
import TreeThings from './TreeThings';
import BkTree from '../../img/tree_things/tree.png';

const TreeSection = () => {
  return (
    <StyledAll>
      <StyledTreeSection>
        <TreeThings/>
      </StyledTreeSection>
      {/* <StyledInfoSection>
        <Info/>
      </StyledInfoSection> */}
      </StyledAll>
    
  )
}


const StyledAll = styled.div`
display: flex;
width: 100%;
height: 100%;


`

const StyledInfoSection = styled.div`
height: 100%;
flex-basis: 30%;
width: 100%;

`

const StyledTreeSection = styled.div`
margin: 1%;
border-radius: 10px;
display: flex;
// flex-basis: 90%;
// height: 100%;
width: 100%;
// background-color: gray;
`
export default TreeSection