import styled from 'styled-components';
import { FullContainerStyles, ContainerStyles } from '../../styles.shared';

export const FooterFullContainer = styled.footer`
    ${FullContainerStyles}
    background-color: var(--bg-light-gray);
`

export const FooterContainer = styled.section`
    ${ContainerStyles}
    justify-content: space-around;
    align-items: center;
    height: 103px;
    background-color: var(--bg-light-gray);

    @media only screen and (max-width:768px){
        text-align: center;
        align-content: center;

        > div { 
            width: 100%; 
            margin: 0;            
        }

        > div > span {
            font-size: 13px;
        }
    }
`