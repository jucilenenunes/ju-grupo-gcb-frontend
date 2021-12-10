import styled from 'styled-components';

export const FormControl = styled.div`
    justify-content: center;
    align-items: center;
    padding: 0 0 10px 0;

    > label,
    > input,
    > span {
        width: 100%;
        font-family: var(--text-default-font);
        font-size: 16px;
    }

    > button {
        float: right;
    }

    &.error > input {
        border: solid 1px red;
    }

    &.error > span {
        color: red;
    }

    > label {
        display: block;
    }

    div.cepResultado {
        padding: 0 10px 0 30px;
    }
`;

