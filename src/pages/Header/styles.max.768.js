import HeaderBackgroundMobile from '../../assets/img/header-background-mobile.png';

export const HeaderFullContainer768 = `
    @media only screen and (max-width:768px){
        width: 100%;
        min-width: 320px;
    }
`;

export const HeaderContainer768 = `
    @media only screen and (max-width:768px){
        width: 100% !important;
        height: 700px !important;
        background: no-repeat center url(${HeaderBackgroundMobile});
        
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        align-content: stretch;
        padding: 0 !important;
        margin: 0 !important;

        .header-bar {
            display: flex;
            flex-direction: column;
            height: auto !important;
        }
        
        .header-bar > .logotype {
            font-size: 40px;
            color: var(--text-white);
            margin: 0 !important;
            padding: 0 0 10px 0 !important;
        }

        .header-bar > ul.menu {
            display: block;
            margin: 0 !important;
            padding: 0 !important;
            justify-content: center;
            width: 165px;
            height: 130px;
        }

        .header-bar > ul.menu > li {
            display: block;
            background-color: var(--bg-green-menu);
            text-align: center;
            padding: 8px;
        }

        .header-bar > ul.menu >  li > button {
            width: 100%;
            padding: 5px;
            background-color: var(--bg-green);
            color: var(--text-white);
        }

        .header-call-to-action { 
            margin: 110px 0 0 0;
            padding: 20px 10px;
            width: 100%;
            height: 400px;

            display: flex;
            justify-content: end;
            align-itens: center;
            flex-direction: column;
            text-align: center;
        }

        .header-call-to-action > h1 {
            margin: 0 10%;
            font-size: 26px;
            background-color: #ffffffAA;
        }

        .header-call-to-action > .form-box {
            padding-top: 10px;
            justify-content: center;
        }

        .header-call-to-action > .form-box > input {
            background-color: #ffffffCC;
            color: black;
        }
    }
`;