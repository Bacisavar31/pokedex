import React, {useState, useEffect} from "react";
import './App.css';
import PokeCard from "./components/PokeCard";

function App() {

  const [allPokemons, setallPokemons] = useState([])
  const [currentURL, setcurrentURL] = useState(["https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"])
  const [nextURL, setnextURL] = useState([])

  async function getPokemonData() {
    const data = await fetch(currentURL).then((res) => res.json())
    setnextURL(data.next)

    data.results.forEach(async pokemon => {
      const inner_data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then((res) => res.json())

      setallPokemons((currentList) => [...currentList, inner_data])
    });

  }

  function gotoNextPage() {
    setcurrentURL(nextURL)
  }

  useEffect(() => {
    getPokemonData()
  }, [currentURL])


  return (
    <>
      <div className="head">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="" className="pic"></img>
        <p>Yaman's Pokedex</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png" alt="" className="pic"></img>
      </div>
      <div className="deck">
        { allPokemons.map((pokemon, index) => <PokeCard 
        id={pokemon.id}
        name={pokemon.name}
        image={pokemon.sprites.other.dream_world.front_default}
        type={pokemon.types[0].type.name}
        hp={pokemon.stats[0].base_stat}
        attack={pokemon.stats[1].base_stat}
        defence={pokemon.stats[2].base_stat}
        speed={pokemon.stats[5].base_stat}
        key={index} />)}
      </div>
        
      <div className="buttonholder">
        <button onClick={gotoNextPage}>Load More</button>
      </div>
    </>
  );
}

export default App;
