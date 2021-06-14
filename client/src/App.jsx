import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import './App.css';
import LogReg from './views/LogReg';
import Main from './views/Main';
import Table from './component/Table';
import Map from './component/Map';
import mapboxgl from 'mapbox-gl';


function App() {
  return (
  

      <div>
        
        <Router>
          <LogReg path="/"/>
          <Main path="/dashboard"/>
        </Router>

        </div>


  );
}

export default App;


