import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body{
        height: 100%;
        margin : 0;
        padding : 0;
        font-family: 'Gowun Dodum', sans-serif;
    }
    //배경화면 이미지
    body{
        background-size : cover;
        
    }
    //버튼
    button{
        cursor : pointer;
        border : none;
        font-family: 'Gowun Dodum', sans-serif;
    }
    .App{
        display: flex;
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;
export default GlobalStyles;
