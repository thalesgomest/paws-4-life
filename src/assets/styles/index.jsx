import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
    html, body, #root {
        font-family: var(--fonte-primaria);
        height: 100%;
        width: 100%;  
    }
    :root {
            --fonte-primaria: 'Montserrat', sans-serif;
            --fonte-secundaria: 'Square Peg', serif;
            --cor-primaria: #F2F2F2;
            --cor-secundaria: #A66F79;
            --cor-terciaria: #8C5D42;
    }
`;

export default GlobalStyle;
