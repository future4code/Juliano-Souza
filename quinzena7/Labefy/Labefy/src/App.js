import React, {useState} from 'react';
import { createGlobalStyle } from 'styled-components';
// import axios from "axios"
import styled from "styled-components"
import Header from './components/Header/Header';
import Playlists from './components/Playlists/Playlists';
import SectionLeft from './components/SectionLeft/SectionLeft';
import SectionRight from './components/SectionRight/SectionRight';
// import Tracks from './components/Playlists/Tracks/Tracks'

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
  'SectionLeft Playlists Playlists'
  'SectionLeft . .'
  ;
`



function App() {

  return (
    <Body>
      <GlobalStyle/>
      <Header/>
      <SectionLeft/>
      <Playlists/>
      {/* <SectionRight/> */}
    </Body>
  );
}

export default App;
