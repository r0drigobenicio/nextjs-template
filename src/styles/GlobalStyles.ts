import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    max-width: 100%;
    max-height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    outline-color: var(--black-color);
  }

  body {
    color: var(--black-color);
    font: 400 1.6rem Roboto, sans-serif;
  }

  html {
    background: var(--background-color);
  }

  button {
    user-select: none;
  }

  :root {
    font-size: 60%;

    --background-color: #f5f5f5;
    --black-color: #000;
    --primary-gray-color: #787878;
    --secondary-gray-color: #585858;
    --border-color: #C7C7C7;
  }

  @media (min-width: 768px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
