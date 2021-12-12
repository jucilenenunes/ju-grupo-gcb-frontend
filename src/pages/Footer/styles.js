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
`