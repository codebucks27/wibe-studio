import '@fontsource/orbitron'; // Replaced 'Sirin Stencil' with 'Orbitron' (similar to Stereo Gothic)
import '@fontsource/kaushan-script';
import '@fontsource/share-tech-mono';


import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

${'' /* *{
    outline: 1px solid red !important;
}  */}

html.has-scroll-smooth {
    overflow: hidden;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;  
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}
body{
    font-family: "Orbitron", sans-serif;
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
