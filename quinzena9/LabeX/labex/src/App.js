import { GlobalStyle } from "./assets/globalStyles";
import { BrowserRouter, Route } from 'react-router-dom'

// Components
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <GlobalStyle/>
      {/* <BrowserRouter>
          <Route path='/' exact component={Home}/>
      </BrowserRouter> */}
      <Home/>
    </div>
  );
}

export default App;
