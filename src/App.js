import React from 'react';
import logo from './images/logo.png';
//import data from './data.json'
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
class App extends React.Component{
  //Se inicializa state
  state = {
    loading: true,
    error: null,
    data: {
      //Se inicializa results ya que si presenta un error de undefined
      results: [],
    },
  }
  componentDidMount(){      
    this.fetchCharacters();      
  }
  fetchCharacters = async()=>{
    this.setState({
      loading: true,
      error: null,
    })
    try{
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      this.setState({
        loading: false,
        data: data,
      })
        
    }catch(error){
      this.setState({
        loading: false,
        error: error,
      })
    }
  };
  render(){    
    return (
      <div className="container">
          <div className="App">
            <img className="Logo" src={logo} alt="Rick y Morty" />
            <ul className="row">
              {this.state.data.results.map(character =>(
                  <li className="col-6 col-md-3" key={character.id}>
                         <CharacterCard character={character}/>        
                  </li>  
              ))}      
            </ul>
          </div>
        </div>
    );
  }
  }
export default App;
