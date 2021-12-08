import styled from 'styled-components';

export const FormControl = styled.div`
    display: block;
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

    > button.button {
        display: block;
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
`;

