import styled from 'styled-components';
import { FullContainerStyles, ContainerStyles } from '../../styles.shared';
import Illustration from '../../assets/img/Illustration.svg';
import { HeaderFullContainer768, HeaderContainer768 } from './styles.max.768';
import { HeaderFullContainer1024, HeaderContainer1024 } from './styles.max.1024';
import { HeaderFullContainer1200, HeaderContainer1200 } from './styles.max.1200';

export const HeaderFullContainer = styled.header`
    ${FullContainerStyles}
    background-color: var(--bg-white);

    ${HeaderFullContainer1200}
    ${HeaderFullContainer1024}
    ${HeaderFullContainer768}
`;

export const HeaderContainer = styled.section`
    ${ContainerStyles}
    background: no-repeat right url(${Illustration});
    height: 744px;

    .header-bar {
        display: flex;
        justify-content: space-between;
        align-self: start;
        align-items: center;
        width: 100%;
        height: 103px;
    }

    .header-bar > .logotype {
        margin-left: 137px;
        align-self: center;
        font-family: var(--text-title-font);
        font-size: 32px;
        font-weight: bold;
        color: var(--text-green);
    }

    .header-bar > ul.menu {
        padding: 0 137px;
        display: flex;
        align-items: center;
        list-style: none;
        color: White;
    }
  
    .header-bar > ul.menu >  li {
        padding-left: 30px;
    }

    .header-bar > ul.menu >  li > a {
        font-family: var(--text-default-font);
        font-weight: 700;
        color: var(--text-white);
        text-transform: uppercase;
        cursor: pointer;
    }

    .header-bar > ul.menu >  li > a.active,
    .header-bar > ul.menu >  li > a:hover
    {
        text-decoration: underline;
    }

    .header-bar > ul.menu >  li > button {
        font-family: var(--text-default-font);
        font-weight: 700;
        color: var(--text-green);
        background-color: #ffffff;
        padding: 15px;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .header-bar > ul.menu >  li > button.active,
    .header-bar > ul.menu >  li > button:hover
    {
        background-color: #F7F7F7;
    }

    .header-bar > .menu-mobile-btn 
    {
        display: none;
        width: 45px;
        height: 40px; 
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 10px;
        background-color: #333;
        cursor: pointer;
        transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s; 
        -moz-transition-duration: 0.3s;
    }

    .header-bar > .menu-mobile-btn > span {
        height: 3px;
        display: block;
        margin-bottom: 5px;
        background-color: #fff;
    }

    .header-call-to-action {
        margin-left: 137px;
        width: 412px;
        font-family: var(--text-title-font);
        font-weight: bold;
        color: var(--text-blue);       
    }

    .header-call-to-action > h1 {
        font-family: var(--text-title-font);
        font-size: 48px;
        font-weight: bold;
        color: var(--text-blue);
    }

    .header-call-to-action > .form-box {
        display: flex;
        justify-content: start;
        padding-top: 40px;
    }

    .header-call-to-action > .form-box > input {
        font-family: var(--text-default-font);
        font-size: 16px;
        font-weight: 400;
        color: var(--text-light-gray);
        border: solid 1px var(--border-blue);
        border-radius: 5px;
        width: 343px;
        margin-right: 10px;
        padding: 10px;
    }

    .header-call-to-action > .form-box > button {
        padding: 10px;
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ${HeaderContainer1200}
    ${HeaderContainer1024}
    ${HeaderContainer768}
`;
