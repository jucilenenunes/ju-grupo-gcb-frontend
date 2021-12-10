import styled from 'styled-components';

export const DefaultContainer = `
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 1366px;
    padding: 0 20px; 

    @media (max-width: 600px)
    {
        body {
            
        }

        header-call-to-action {
            margin-left: -60px;
        }

        input {
            widht: 267px !important;
        }
    }
`;

export const Container = styled.main`
    ${DefaultContainer}
`;