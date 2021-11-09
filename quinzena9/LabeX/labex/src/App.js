import { GlobalStyle } from "./assets/globalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PublicContextProvider } from "./contexts/PublicContext";
import { AdminContextProvider } from "./contexts/AdminContext";

// Components
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"
import { TripInformation } from "./pages/TripInformation";
import { ApplicationForm } from './pages/ApplicationForm'
import { AdminHome } from "./pages/AdminHome";
import { CreateNewTrip } from "./pages/CreateNewTrip";
import { TripDetails } from "./pages/TripDetails";

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <AdminContextProvider>
          <PublicContextProvider>
            <Routes>
              <Route path='/' exact element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/trips/list' element={<TripInformation/>}/>
              <Route path='/trips/application/:id/:trip_name' element={<ApplicationForm/>}/>
              <Route path='/admin' element={<AdminHome/>}/>
              <Route path='/admin/create_new_trip' element={<CreateNewTrip/>}/>
              <Route path='/admin/trip_details/:id' element={<TripDetails/>}/>
            </Routes>
          </PublicContextProvider>
        </AdminContextProvider>
      </Router>
    </div>
  );
}

export default App;
