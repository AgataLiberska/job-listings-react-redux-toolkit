import { createGlobalStyle } from 'styled-components';
import mobileBanner from './images/bg-header-mobile.svg';
import desktopBanner from './images/bg-header-desktop.svg';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: hsl(180, 29%, 50%);
        --background: hsl(180, 52%, 96%);
        --filter: hsl(180, 31%, 95%);
        --secondary: hsl(180, 14%, 20%);
        --secondary-light: hsl(180, 8%, 52%);
    }
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        min-height: 100vh;
        font-family: Spartan, non-serif;
        background-color: var(--background);
    }
    ul,ol {
        list-style-type: none;
    }
    .banner {
        height: 9.75rem;
        width: 100%;
        background-color: var(--primary);
        background-image: url(${mobileBanner});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;
        @media screen and (min-width: 48rem) {
            background-image: url(${desktopBanner});
        }
    }
`

export default GlobalStyle;