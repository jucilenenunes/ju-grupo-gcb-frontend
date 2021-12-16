import styled from 'styled-components';
import { FullContainerStyles, ContainerStyles } from '../../styles.shared';

export const BlogFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-light-gray);
`;

export const BlogContainer = styled.section`
    ${ContainerStyles}

    width: 1300px;
    justity-content: center;
    flex-direction: row;
    padding: 35px 0 35px 0;

    > div {
        width: 100%;
    }

    > div:nth-child(1) > * {
        text-align: center;
    }

    > div:nth-child(2) {

        height: 500px;
    }
`;