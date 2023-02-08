import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonColection from "./components/PokemonColection";
import { Pokemons } from "./interface";
import { PokemonState } from "./interface";


const App: React.FC = () => {
  const [nextPokemon, setNextPokemon] = useState<string>("");
  const [pokemons, setPokemons] = useState<PokemonState[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const getPoke = async () => {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
      );
      setNextPokemon(res.data.next);
      res.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
        setLoading(false);
        // console.log(">>> check data :", poke.data);
      });
    };
    getPoke();
  }, []);

  const handleNextPoke = async () => {
    setLoading(true);
    let res = await axios.get(nextPokemon);
    setNextPokemon(res.data.next);

    res.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <div className="pokemon-header">Pokemons</div>
      <PokemonColection pokemons={pokemons} />
      <div className="btn">
        <button onClick={handleNextPoke}>
          {loading ? "loading..." : "load more"}
        </button>
      </div>
    </div>
  );
};

export default App;
