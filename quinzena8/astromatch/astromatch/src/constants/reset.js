import darkBackground from '../assets/darkBackground.jpg';
import lightBackground from '../assets/lightBackground.jpg';
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
  background: ${p => p.theme.background};
  transition: background 300ms ease-in-out;
  background-image: url(${p => p.theme.id === 1 ? lightBackground : darkBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
`