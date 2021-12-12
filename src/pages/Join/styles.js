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
        width: 412px;
        font-family: var(--text-title-font);
        font-weigth: bold;
        color: var(--text-blue);       
    }

    > div > h1 {
        font-family: var(--text-title-font);
        font-size: 48px;
        font-weigth: bold;
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
        padding: 10px;
    }

    > div > div > button {
        padding: 12px 20px;
    }
`;