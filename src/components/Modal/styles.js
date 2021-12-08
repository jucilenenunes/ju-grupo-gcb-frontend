import styled from 'styled-components';

export const ModalStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: #000000BB;
    z-index: 1000;
    width: 100vw;
    height: 100vh;

    > div {
        z-index: 1001;
        width: 460px;
        height: auto;
        background-color: white;
        padding 10px;
    }

    > div > div > h1 {
        font-size: 36px;
    }
`;

