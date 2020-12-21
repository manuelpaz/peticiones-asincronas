import React from 'react';
import logo from './images/logo.png';
import Loader from './components/Loader';
//import data from './data.json'
import "./styles.css";
import './App.css';
function CharacterCard(props) {
  const { character } = props;
  return (
    <div className="personaje">
        <div
          className="CharacterCard"
          style={{ backgroundImage: `url(${character.image})`}}          
        >
        <div className="CharacterCard__name-container text-truncate">
          {character.name}
        </div>
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
            <div className="rejillaPersonajes">
              {this.state.data.results.map(character =>( 
                <li id={character.id} key={character.id} ><CharacterCard character={character}/> </li>                 
                  
              ))}      
            </div>   
            {this.state.loading && <Loader/>}           
          </div>
        </div>
    );
  }
  }
export default App;
