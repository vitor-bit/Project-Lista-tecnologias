import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFF;
        --white-200: #EDEDED;

        --dark-600: #121212;
        --dark-300: #27272A;

        --grey: rgba(218, 218, 218, 0.33);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--dark-600);
    }
    
    body, button, h1 {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        -weibkit-font-smoothing: antialiased;
    }

`