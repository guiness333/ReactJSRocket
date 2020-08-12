import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background: #fafafa;
        color: #333;
    }
`;
