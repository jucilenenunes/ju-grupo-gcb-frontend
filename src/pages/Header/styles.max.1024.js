import HeaderBackgroundMobile from '../../assets/img/header-background-mobile.png';

export const HeaderFullContainer1024 = `
    @media only screen and (min-width: 769px) and (max-width:1024px){
        background: no-repeat top center url(${HeaderBackgroundMobile});
        background-size: cover;
        background-position: center;
    }
`;

export const HeaderContainer1024 = `
    @media only screen and (min-width: 769px) and (max-width:1024px){
        background: none;

        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        align-content: stretch;
        padding: 0 !important;
        margin: 0 !important;
        display: flex;
        justify-content: center;

        .header-bar {
            display: flex;
            flex-direction: column;
            height: auto !important;
            margin: 30px;
        }

        .header-bar > .logotype {
            font-size: 40px;
            color: var(--text-white);
            margin: 0 !important;
            padding: 0 0 10px 0 !important;
        }

        .header-bar > ul.menu >  li > button {
            background-color: var(--bg-green);
            color: var(--text-white);
        }

        .header-call-to-action {
            display: flex;
            justify-content: center;
            align-itens: center;
            flex-direction: column;
            text-align: center;
            margin: 0 0 10px 0;
            align-self: end;
            width: 760px;
        }

        .header-call-to-action > h1 {
            margin: 0 10%;
            font-size: 36px;
            background-color: #ffffffAA;
        }

        .header-call-to-action > .form-box {
            padding-top: 10px;
            justify-content: center;
        }
    }
`;