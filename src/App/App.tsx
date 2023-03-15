/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Dashboard from '../secure/Dashboard/Dashboard';
import Users from '../secure/Users/Users';
 import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../public/Login/Login';
import Register from '../public/Register/Register';

function App() {
  return (
    <div className="AppComponent">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
