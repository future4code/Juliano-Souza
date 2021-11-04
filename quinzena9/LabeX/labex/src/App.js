import { GlobalStyle } from "./assets/globalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
