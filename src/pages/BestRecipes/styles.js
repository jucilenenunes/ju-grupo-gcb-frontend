import styled from 'styled-components';
import { ContainerStyles, FullContainerStyles } from '../../styles.shared';
import { BestRecipesFullContainer768, BestRecipesContainer768 } from './styles.max.768';
import { BestRecipesFullContainer1024, BestRecipesContainer1024 } from './styles.max.1024';
import { BestRecipesFullContainer1200, BestRecipesContainer1200 } from './styles.max.1200';

export const BestRecipesFullContainer = styled.section`
    ${FullContainerStyles}
    background-color: var(--bg-light-gray);
    ${BestRecipesFullContainer768}
    ${BestRecipesFullContainer1024}
    ${BestRecipesFullContainer1200}
`

export const BestRecipesContainer = styled.section`
    ${ContainerStyles}
    width: 1092px;
    
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
        width: 200px;
    }
    ${BestRecipesContainer768}
    ${BestRecipesContainer1024}
    ${BestRecipesContainer1200}
`;