import ServiceMobile from '../../assets/img/bloco_services_mobile.png';

export const BestServicesFullContainer768 = `
    @media only screen and (max-width:768px){
       
    }
`;

export const BestServicesContainer768 = `
    @media only screen and (max-width:768px){
        background: no-repeat left url(${ServiceMobile});
        display: flex;
        justify-content: center;
        align-items: center;
        height: 659px;

        > div {
            width: 100%;
            padding: 0;
            margin: 0;

            text-align: center;
        }

        > div > h3 {
            padding: 0;
            margin: 0;
            text-align: center;
            font-size: 26px;
            width: 100%;
        }

        > div > p {
            display: flex;
            color: black;
            padding: 0 20px;
            font-size: 20px;
        }

       
    } 
`;