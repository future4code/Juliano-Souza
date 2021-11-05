import { BrowserRouter, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage/index'
import { MatchesPage } from './pages/MatchesPage/index'
import {ProfileContextProvider}  from './contexts/ProfileContext';
import { ThemeContextProvider } from './contexts/ThemeContext'
import { GlobalStyle } from './constants/reset'

function App() {

  return (
    <>
      <BrowserRouter>
        <ProfileContextProvider>
          <ThemeContextProvider>
            <GlobalStyle/>
            <Route path='/' exact component={HomePage}/>
            <Route path='/matches' component={MatchesPage}/>
          </ThemeContextProvider>
        </ProfileContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
