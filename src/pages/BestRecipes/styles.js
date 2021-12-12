import styled from 'styled-components';
import { ContainerStyles, FullContainerStyles } from '../../styles.shared';

export const BestRecipesFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-light-gray);
`

export const BestRecipesContainer = styled.section`
    ${ContainerStyles}

    
    padding: 35px 0 35px 0;

    > article {
        width: 100%;
        text-align: center !important;
        padding: 0 0 25px 0;
    }

    > article > h2 {
        padding-bottom: 10px;
    }

    > div {
        display: inline-flex;
        width: 49%;
        margin-bottom: 20px;
        background-color: var(--bg-white);
        justify-content: start;
        align-items: center;
        box-shadow: 2px 4px 4px #00000015;
    }

    > div > div { 
        padding: 0 20px 0 20px;
    }

    > div > div > h3 {
        margin-bottom: 10px;
    }
`;