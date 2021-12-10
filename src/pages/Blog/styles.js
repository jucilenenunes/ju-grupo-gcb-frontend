import styled from 'styled-components';

export const BlogContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    background-color: var(--bg-light-gray);
    width: 100%;
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