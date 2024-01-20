import { createGlobalStyle } from 'styled-components';
import wallPaper from './images/wallpaper.jpeg';

const GlobalStyles = createGlobalStyle`
    html, body{
        height: 100%;
        margin : 0;
        padding : 0;
    }
    //배경화면 이미지
    body{
        background-size : cover;
        background-image: url(${wallPaper});
    }
    //버튼
    button{
        cursor : pointer;
        border : none;
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
