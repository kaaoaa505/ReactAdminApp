/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Dashboard from './secure/Dashboard';
import Nav from './secure/components/Nav';
import SidebarMenu from './secure/components/SidebarMenu';

function App() {
  return (
    <div className="AppComponent">
      
      <Nav />

      <div className="container-fluid">
        <div className="row">

          <SidebarMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            
            <Dashboard />

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
