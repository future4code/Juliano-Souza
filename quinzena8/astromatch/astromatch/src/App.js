import { BrowserRouter, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage/index'
import { MatchesPage } from './pages/MatchesPage/index'
import {ProfileContextProvider}  from './contexts/ProfileContext';
import { ThemeContextProvider } from './contexts/ThemeContext'
import { GlobalStyle } from './constants/reset'
import { ThemeProvider } from 'styled-components'
// import { useContext } from 'react'

// const {theme} = useContext(ThemeContext)

function App() {

  return (
    <>
      <BrowserRouter>
        <ProfileContextProvider>
          <ThemeContextProvider>
              <ThemeProvider theme={{}}>
                <GlobalStyle/>
                <Route path='/' exact component={HomePage}/>
                <Route path='/matches' component={MatchesPage}/>
              </ThemeProvider>
          </ThemeContextProvider>
        </ProfileContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
