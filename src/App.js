import logo from './images/logo.png';
import "./styles.css";
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />

          <ul className="row"> 
              <li className="col-6 col-md-3" key="1">
                     Manuel           
              </li>
              <li className="col-6 col-md-3" key="2">
                     Belen           
              </li>     
          </ul>
        </div>
      </div>
  );
}

export default App;
