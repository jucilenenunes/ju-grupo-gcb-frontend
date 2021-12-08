import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --text-title-font: 'Montserrat', sans-serif;
        --text-default-font: 'Mulish', sans-serif;
        
        --text-green: #badc58;
        --text-blue: #1d164d;
        --text-white: #ffffff;
        --text-light-gray: #b4b4b4;

        --bg-green: #badc58;
        --bg-green-night: #a7c457;
        --bg-light-gray: #fafafc;
        --bg-white: #ffffff;

        --border-blue: #2D3561;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--text-blue)
    }

    h1 { font-size: 48px; }
    h2 { font-size: 32px; }
    h3 { font-size: 24px; }

    p, span {
        font-family: var(--text-default-font);
        font-size: 16px;
        color: var(--text-light-gray);
    }

    a.button,
    button.button,
    input.button {
        font-family: var(--text-default-font);
        font-size: 16px;
        font-weight: 400;
        color: var(--text-white);
        background-color: var(--bg-green);
        padding: 5px 10px;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;
        border: none;
    }

    a.button.active,
    a.button:hover
    {
        background-color: var(--bg-green-night);
    }

    @media (max-width: 1365px)
    {
        
    }

    @media (max-width: 1199px)
    {
        
    }

    @media (max-width: 1023px)
    {

    }

    @media (max-width: 767px)
    {
        
    }

    @media (max-width: 479px)
    {

    }
`;