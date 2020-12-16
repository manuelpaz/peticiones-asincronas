import logo from './images/logo.png';
import data from './data.json'
import "./styles.css";
import './App.css';
function CharacterCard(props) {
  const { character } = props;

  return (
    <div
      className="CharacterCard"
      style={{ backgroundImage: `url(${character.image})` }}
    >
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  );
}
function App() {
  return (
    <div className="container">
        <div className="App">
          <img className="Logo" src={logo} alt="Rick y Morty" />
          <ul className="row">
            {data.results.map(character =>(
                <li className="col-6 col-md-3" key={character.id}>
                       <CharacterCard character={character}/>        
                </li>  
            ))}      
          </ul>
        </div>
      </div>
  );
}

export default App;
