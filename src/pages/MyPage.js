import UpperBox from '../components/MainPages/UpperBox';
import TreeSection from '../components/TreePages/TreeSection';
import styled from 'styled-components';
import Info from '../components/MainPages/Info';

const MyPage = () => {
  return (
    <StyledAll>
      <UpperBox />
      <StyledContents>
        <TreeSection />
        <StyledInfo>
          <Info/>
        </StyledInfo>
      </StyledContents>
    </StyledAll>
  )
};

const StyledInfo = styled.div`
display: flex;
flex-basis: 40%;
height: 100%;`

const StyledContents = styled.div`
display: flex;
felx-direction: row;
height: 100%;`

const StyledAll = styled.div`
display: flex;
flex-direction: column;
height: 100%;

`
export default MyPage;
