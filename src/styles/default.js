import { createGlobalStyle } from 'styled-components';
/**
 * Convert px to rem
 * @function pxToRem
 * @return {string} rem - Return rem unit
 */
const pxToRem = px => {
  const rem = px / 17;
  return rem + 'rem';
};

/**
 * Convert px to em
 * @function pxToEm
 * @return {string} em - Return em unit
 */
const pxToEm = px => {
  const em = px / 17;
  return em + 'em';
};

/**
 * Default colors
 * @function color
 * @return {object} color - return colors from the style guide
 */
const color = {
  lightGrey: 'hsl(210, 17%, 98%)',
  lightBlue: 'hsl(202, 74%, 90%)',
  blue: 'hsl(195, 94%, 52%)',
  lightGreen: 'hsl(164, 90%, 38%)',
  green: 'hsl(163, 91%, 34%)',
  grey: 'hsl(0, 5%, 92%)',
  notificationRed: 'hsl(2, 87%, 56%)',
  darkGreen: 'hsl(164, 89%, 26%)',
  darkGrey: 'hsl(0, 1%, 69%)',
  lightBlack: 'hsl(196, 15%, 15%)',
  darkDarkGrey: 'hsl(0, 0%, 44%)'
};
/**
 * Font
 * @function font
 * @return {object} font - returns font family
 */
const font = {
  primary: 'Roboto, sans-serif',
  secondary: 'Poppins, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};
/**
 * Sizes
 * @function size
 * @return {object} size - returns sizes
 */
const size = {
  maxWidth: '1280px'
};
/**
 * Breakpoints
 * @function breakpoint
 * @return {object} breakpoint - returns break points sizes for desktop or tablet. We build responsive first
 */
const breakpoint = {
  desktop: pxToEm(1280),
  laptop: pxToEm(1024),
  tablet: pxToEm(720)
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${color.lightGrey};
    margin: 0;
  }
  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }
  p {
    font-family: ${font.primary};
    color: ${color.lightBlack};
    margin: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: ${font.secondary};
    color: ${color.lightBlack};
    font-weight: bold;
  }
  h1 {
  font-size: ${pxToRem(26)};
  }
  h2 {
    font-size: ${pxToRem(24)};
  }
  h3, h4 {
    font-size: ${pxToRem(16)};
  }
  @media screen and (min-width: ${pxToEm(720)}) {
    h1 {
      font-size: ${pxToRem(40)};
    }
    h3, h4 {
      font-size: ${pxToRem(18)};
    }
  }
`;

export { GlobalStyle, color, font, size, breakpoint, pxToRem, pxToEm };