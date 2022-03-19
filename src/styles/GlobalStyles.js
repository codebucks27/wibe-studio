import '@fontsource/sirin-stencil';
import '@fontsource/kaushan-script';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid red !important;
}  */}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Sirin Stencil";
    overflow-x: hidden;
}
h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
a{
    color: inherit;
    text-decoration:none;
}
`;

export default GlobalStyles;
