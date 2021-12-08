import styled from 'styled-components';
import Illustration from '../assets/img/Illustration.svg';
import BlocoServices from '../assets/img/bloco_services.svg';
import BlocoFinal from '../assets/img/bloco_final_image.svg';

const stylesContainer = `
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 1366px;
    padding: 0 10px 0 10px;

    @media (max-width: 1365px)
    {
        width: 1200px;
    }

    @media (max-width: 1199px)
    {
        width: 1024px;
    }

    @media (max-width: 1023px)
    {
        width: 768px;

    }

    @media (max-width: 767px)
    {
        width: 480px;
    }
`;

export const Container = styled.div`
    ${stylesContainer}
`

export const HeaderContainer = styled.header`
    ${stylesContainer}
    background: no-repeat right url(${Illustration});
    height: 746px;

    .header-bar {
        display: flex;
        justify-content: space-between;
        align-self: start;
        align-items: center;
        width: 100%;
        height: 103px;
    }

    .header-bar > .logotype {
        align-self: center;
        font-family: var(--text-title-font);
        font-size: 32px;
        font-weigth: bold;
        color: var(--text-green);
    }

    .header-bar > ul.menu {
        padding: 0 137px;
        display: flex;
        list-style: none;
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

    .header-bar > ul.menu >  li > a.button {
        font-family: var(--text-default-font);
        font-weight: 700;
        color: var(--text-green);
        background-color: #ffffff;
        padding: 15px;
        border-radius: 5px;
        text-transform: uppercase;
    }

    .header-bar > ul.menu >  li > a.button.active,
    .header-bar > ul.menu >  li > a.button:hover
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
        width: 412px;
        font-family: var(--text-title-font);
        font-weigth: bold;
        color: var(--text-blue);       
    }

    .header-call-to-action > h1 {
        font-family: var(--text-title-font);
        font-size: 48px;
        font-weigth: bold;
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

    .header-call-to-action > .form-box > a.button {
        padding: 10px;
        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 1366px)
    {
        background-size: auto 100%;
        height: 500px;

        .header-bar > .menu {
            padding: 0 70px;
        }
    }

    @media (max-width: 1365px)
    {
        
    }

    @media (max-width: 1199px)
    {
        
    }

    @media (max-width: 1023px)
    {
        .header-bar > .logotype {
            font-size: 20px;
        }

        .header-call-to-action {
            width: 240px;
        }
    
        .header-call-to-action > h1 {
            font-size: 34px;
        }

        .header-call-to-action > .form-box {
            padding-top: 20px;
        }

        .header-call-to-action > .form-box > input { 
            width: 190px;
        }
    }

    @media (max-width: 767px)
    {
        background: no-repeat right url(${Illustration});
        background-size: auto 100%;
        height: 200px;


        justify-content: space-between;
        align-items: start;
        flex-wrap: wrap;

        .header-bar > .menu-mobile-btn {
            display: block;
            transform: translateX(0);
        }
    }
`

export const MainContainer = styled.main`
    ${stylesContainer}

    section.home-our-best-recipes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        background-color: var(--bg-light-gray);
        padding: 35px 0 35px 0;
    }

    section.home-our-best-recipes > div:nth-child(1) {
        width: 100%;
        text-align: center !important;
        padding: 0 0 25px 0;
    }

    section.home-our-best-recipes > div:nth-child(1) > h2 {
        padding-bottom: 10px;
    }

    section.home-our-best-recipes > div.home-card {
        display: inline-flex;
        width: 49%;
        margin-bottom: 20px;
        background-color: var(--bg-white);
        justify-content: start;
        align-items: center;
        box-shadow: 2px 4px 4px #00000015;
    }

    section.home-our-best-recipes > div.home-card > div { 
        padding: 0 20px 0 20px;
    }

    section.home-our-best-recipes > div.home-card > div > h3 {
        margin-bottom: 10px;
    }

    section.home-the-best-services {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: start;
        background-color: var(--bg-white);
        background: no-repeat left url(${BlocoServices});
        width: 100%;
        height: 727px;
        padding: 35px 0 35px 0;
    }
    
    section.home-the-best-services > div {
        width: 420px;
        height: auto;
        margin: 146px 100px 0 0;
    }

    section.home-the-best-services > div > p {
        margin: 0 0 20px 0;
    }

    section.home-read-our-blog {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        flex-wrap: wrap;
        background-color: var(--bg-light-gray);
        width: 100%;
        padding: 35px 0 35px 0;
    }

    section.home-read-our-blog > div {
        width: 100%;
    }

    section.home-read-our-blog > div:nth-child(1) > * {
        text-align: center;
    }

    section.home-read-our-blog > div:nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    section.home-read-our-blog > div:nth-child(2) > div {
        width: 24%;
    }

    section.home-read-our-blog > div:nth-child(2) > div > img {
        width: 100%;
        margin: 0;
        padding: 0;
        border: 0;
    }

    section.home-read-our-blog > div:nth-child(2) > div > h3,
    section.home-read-our-blog > div:nth-child(2) > div > div {
        padding: 10px;
    }

    section.home-join-call-to-action {
        ${stylesContainer}
        align-items: center;
        background: no-repeat right url(${BlocoFinal});
        width: 100%;
        height: 672px;
    }

    section.home-join-call-to-action > div {
        width: 412px;
        font-family: var(--text-title-font);
        font-weigth: bold;
        color: var(--text-blue);       
    }

    section.home-join-call-to-action > div > h1 {
        font-family: var(--text-title-font);
        font-size: 48px;
        font-weigth: bold;
        color: var(--text-blue);
    }

    section.home-join-call-to-action > div > div {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-top: 40px;
    }

    section.home-join-call-to-action > div > div > input {
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

    section.home-join-call-to-action > div > div > a.button {
        padding: 12px 20px;
    }
`

export const FooterContainer = styled.footer`
    ${stylesContainer}
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 103px;
    background-color: var(--bg-light-gray);
`