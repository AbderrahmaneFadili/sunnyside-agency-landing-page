import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before{
       box-sizing: border-box;
       padding: 0;
       margin: 0;
    }

    :root{
        /* Typography */
      --headings-buttons-font:'Fraunces', serif;
      --main-font:'Barlow', sans-serif;
      --font-size:18px;
        /* Colors */
        --white:#fff;
        --grayish-blue:hsl(210, 4%, 67%);
        --dark-grayish-blue:hsl(232, 10%, 55%);
        --very-dark-grayish-blue:hsl(213, 9%, 39%);
        --very-dark-desaturated-blue:hsl(212, 27%, 19%);
        --yellow:hsl(51, 100%, 49%);
        --soft-red:hsl(7, 99%, 70%);
        --footer:hsl(168, 34%, 41%);
        --photography-text:hsl(198, 62%, 26%);
        --graphic-design-text:hsl(167, 40%, 24%);
    }


    html{
        font-family: var(--main-font);
        font-size: var(--font-size);
        scroll-behavior: smooth;
    }

    
`;

export default GlobalStyle;
