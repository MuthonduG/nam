import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing from "./main/landing/Landing";
import Register from "./main/register/Register"
import Dashboard from './main/dashboard/Dashboard';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Landing/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
