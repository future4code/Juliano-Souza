import background from '../assets/background.jpg';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  font-family: 'Montserrat', sans-serif;
  background-color: ${p => p.theme.background};
  transition: 300ms ease-in-out;
  /* background-image: url(${background}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
`