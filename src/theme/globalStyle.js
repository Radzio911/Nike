import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        font-family: sans-serif;
    }
    *{
        font-family: 'Blinker', sans-serif;
        box-sizing: border-box;
        margin: 0;
    }
    input, button, select, textarea, option{
        font-family: 'Blinker', sans-serif;
    }
    a{
        color: black;
    }
`;
