import { GlobalStyle } from "./assets/globalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PublicContextProvider } from "./contexts/PublicContext";

// Components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"
import { TripInformation } from "./pages/TripInformation";
import { ApplicationForm } from './pages/ApplicationForm'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <PublicContextProvider>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/trips/list' element={<TripInformation/>}/>
            <Route path='/trips/application/:id' element={<ApplicationForm/>}/>
          </Routes>
        </PublicContextProvider>
      </Router>
    </div>
  );
}

export default App;
