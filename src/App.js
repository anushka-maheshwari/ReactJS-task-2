import {Routes,Route} from 'react-router-dom';
import './App.css'
import Dashboard from './components/Dashboard';
import LandingPage from "./components/LandingPage";
import LoginForm from './components/LoginForm';
import ProtectRoute from './ProtectedRoute/ProtectRoute';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/"  element={<LandingPage city={'Aligarh'}/>} />
    <Route path='/login'  element={<LoginForm/>} />
    <Route element={<ProtectRoute/>}>
    <Route path='/dashboard'  element={<Dashboard/>} />
    </Route>
    </Routes> 
    </div>
  );
}

export default App;
