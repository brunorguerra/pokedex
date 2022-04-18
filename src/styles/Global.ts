import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #f1f2f7;
    }
    input, button, textarea, body {
        font: 500 1.6rem 'Lato', sans-serif;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    input, textarea {
        outline: none;
    }
`;
