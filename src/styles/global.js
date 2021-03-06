import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.jpg'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: url(${background}) no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
`

export default GlobalStyle;