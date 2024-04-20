import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from "./main/landing/Landing";
import Register from "./main/register/Register"
import Dashboard from './main/dashboard/Dashboard';
import Map from './main/map/Map';
import Geocoding from './main/geocoding/Geocoding';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Landing/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/map' element={<Map/>} />
          <Route path='/geocode' element={<Geocoding/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
