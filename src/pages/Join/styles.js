import styled from 'styled-components';
import { FullContainerStyles, ContainerStyles } from '../../styles.shared';
import BlocoFinal from '../../assets/img/bloco_final_image.svg';

export const JoinFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-white);
`;

export const JoinContainer = styled.section`
    ${ContainerStyles}
    align-items: center;
    background: no-repeat right url(${BlocoFinal});
    height: 672px;

    > div {
        margin-left: 120px;
        width: 412px;
        font-family: var(--text-title-font);
        font-weight: bold;
        color: var(--text-blue);       
    }

    > div > h2 {
        font-family: var(--text-title-font);
        font-weight: bold;
        color: var(--text-blue);
    }

    > div > div {
        display: flex;
        justify-content: start;
        align-items: center;
        padding-top: 40px;
    }

    > div > div > input {
        font-family: var(--text-default-font);
        font-size: 16px;
        font-weight: 400;
        color: var(--text-light-gray);
        border: solid 1px var(--border-blue);
        border-radius: 5px;
        width: 343px;
        margin-right: 10px;
        padding: 20px; 
    }

    > div > div > button {
        padding: 20px 35px;
        font-weight: bold;
        box-shadow: 2px 4px 4px var(--bg-green);
    }
`;