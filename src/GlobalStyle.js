import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${(props) => props.theme.font.family.default};
        color: ${(props) => props.theme.colors.black};
    }
`;

export default GlobalStyle;
