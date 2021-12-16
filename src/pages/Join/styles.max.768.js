

export const JoinFullContainer768 = `
    @media only screen and (max-width:768px){
   
    }
`;

export const JoinContainer768 = `
    @media only screen and (max-width:768px) {
        background-image: none;
        height: 600px;
        display: flex;
        justify-content: center;
        
        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 0;
        }

        > div > div {
            display: flex;
            justify-content: center;
            width: 300px;
            margin-left: 8px;
            flex-wrap: wrap;
        }

        > div > h2  {
            text-align: center;
            font-size: 24px;
            margin: 40px 16px;
        }

        > div > div > input {
            margin: 0;
        }

        > div > div > button {
            align-items: center;
            margin-top: 80px;
        }
    }
`;