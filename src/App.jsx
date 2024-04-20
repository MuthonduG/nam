import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from "./main/landing/Landing";
import Register from "./main/register/Register"
import Dashboard from './main/dashboard/Dashboard';
import Map from './main/map/Map';
import Geocoding from './main/geocoding/Geocoding';
import Onboard from './main/onboard/Onboard';
import Assetlist from './main/assetlist/Assetlist';
import Portfolios from './main/portfolios/Portfolios';
import Asset from './main/asset/Asset';

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
          <Route path='/onboard' element={<Onboard/>} />
          <Route path='/asset-list' element={<Assetlist/>} />
          <Route path='/portfolio-list' element={<Portfolios/>} />
          <Route path='/asset' element={<Asset/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
