// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  .nav-container {
    background-color: ${({ theme }) => theme.navBackground};
  }

  .title {
    color: ${({ theme }) => theme.text};
  }
  
  .countrycard{
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
  }

  .container {
    box-shadow: ${({ theme }) => theme.containerBoxShadow};
  }

  .search_border{
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
    background: ${({ theme }) => theme.navBackground} !important;
  }

  .search_container input {
    background: ${({ theme }) => theme.navBackground} !important;
    color: ${({ theme }) => theme.text};
  }

  .search_container input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.text};
    opacity: 1; /* Firefox */
  }
  
  .search_container input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.text};
  }

  .myControlClassName {
    border: ${({ theme }) => theme.menuBorder} !important;
    background: ${({ theme }) => theme.navBackground} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  
  .myMenuClassName {
    border: ${({ theme }) => theme.menuBorder};
    background: ${({ theme }) => theme.navBackground} !important;
    color: ${({ theme }) => theme.text} !important;
  }
  
  .Dropdown-option {
    color: ${({ theme }) => theme.text} !important;
  }

  .Dropdown-option:hover {
    background: ${({ theme }) => theme.backgroundHover} !important;
    color: ${({ theme }) => theme.textHover} !important;
  }

  .back_button, .border_button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.menuBorder}; 
  }

  .country_row label {
    color: ${({ theme }) => theme.text};
  }

  .details_img {
    box-shadow: ${({ theme }) => theme.cardBoxShadow};
  }

`;