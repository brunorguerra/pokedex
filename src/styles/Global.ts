import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --yellow:#ffde02; 
        --blueLight: #2c71b7;

        --text-black: #222222;
        --text-gray: #656565;
        --text-white: #ffffff;

        --body: #f1f2f7;
        --background-white: #ffffff;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: var(--body);
        color: var(--text-black);
    }
    input, button, textarea, body {
        font: 400 1.6rem 'Lato', sans-serif;
        border: none;
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
