import React from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from "styled-components"
import Header from './components/Header/Header';
import Playlists from './components/Playlists/Playlists';
// import SectionLeft from './components/SectionLeft/SectionLeft';
import Background from './Images/LabefyBg.jpg'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    color: #0E0A19;
  }
`
const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid: 8vh 40vh 52vh / 25% 50% 25%;
  grid-template-areas: 
  'Header Header Header'
  'Playlists Playlists Playlists'
  '. . .'
  ;
  justify-items: center;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;

  @media(max-width: 800px) {
    grid: 90vh/ 100%;
    grid-template-areas: 
    'Playlists'
    ;
  }
`



function App() {

  return (
    <Body>
      <GlobalStyle/>
      {/* <Header/> */}
      {/* <SectionLeft/> */}
      <Playlists/>
    </Body>
  );
}

export default App;
