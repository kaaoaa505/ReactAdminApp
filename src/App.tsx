/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Dashboard from './secure/Dashboard';
import Users from './secure/Users';
import Nav from './secure/components/Nav';
import SidebarMenu from './secure/components/SidebarMenu';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './public/Login';

function App() {
  return (
    <div className="AppComponent">
      <BrowserRouter>

        <Nav />

        <div className="container-fluid">
          <div className="row">

            <SidebarMenu />

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

              <Link to="/">Dashboard</Link>
              &nbsp; | &nbsp;
              <Link to="/users">Users</Link>
              &nbsp; | &nbsp;
              <Link to="/login">Login</Link>

              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/login" element={<Login />} />
              </Routes>

            </main>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
