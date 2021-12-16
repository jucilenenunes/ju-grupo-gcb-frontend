import styled from 'styled-components';

export const FullContainerStyles = `
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
`;

export const ContainerStyles = `
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 1366px;
    padding: 0 20px; 

    @media (max-width: 768px)
    {
        width: 100%;

        header-call-to-action {
            margin-left: -60px;
        }

        input {
            widht: 267px !important;
        }
    }
`;

export const Container = styled.section`
    ${ContainerStyles}
`;

export const FullContainer = styled.div`
    ${FullContainerStyles}
`