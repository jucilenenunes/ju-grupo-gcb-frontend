import styled from 'styled-components';
import BlocoServices from '../../assets/img/bloco_services.svg';
import { ContainerStyles, FullContainerStyles } from '../../styles.shared';

export const BestServicesFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-white);
`

export const BestServicesContainer = styled.section`
    ${ContainerStyles}
    flex-direction: row;
    justify-content: end;
    align-items: start;
    background: no-repeat left url(${BlocoServices});
    height: 727px;
    padding: 35px 0 35px 0;

    > div {
        width: 420px;
        height: auto;
        margin: 146px 100px 0 0;
    }

    > div > p {
        margin: 0 0 20px 0;
    }

    > div > button {
        box-shadow: 2px 4px 4px var(--bg-green);
    }
`;