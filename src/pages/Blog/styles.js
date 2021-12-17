import styled from 'styled-components';
import { FullContainerStyles, ContainerStyles } from '../../styles.shared';
import { BlogFullContainer768, BlogContainer768 } from './styles.max.768';
import { BlogFullContainer1024, BlogContainer1024 } from './styles.max.1024';
import { BlogFullContainer1200, BlogContainer1200 } from './styles.max.1200';

export const BlogFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-light-gray);

    ${BlogFullContainer768}
    ${BlogFullContainer1024}
    ${BlogFullContainer1200}
`;

export const BlogContainer = styled.section`
    ${ContainerStyles}
    max-width: 1250px;    

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

    ${BlogContainer768}
    ${BlogContainer1024}
    ${BlogContainer1200}
`;