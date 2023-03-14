/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';
import SidebarMenu from './components/SidebarMenu';

function App() {
  return (
    <div className="AppComponent">
      
      <Nav />

      <div className="container-fluid">
        <div className="row">

          <SidebarMenu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
            
            <Dashboard />

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
