import styled from 'styled-components';
import BlocoServices from '../../assets/img/bloco_services.svg';

export const BestServicesContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: start;
    background-color: var(--bg-white);
    background: no-repeat left url(${BlocoServices});
    width: 100%;
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
`;