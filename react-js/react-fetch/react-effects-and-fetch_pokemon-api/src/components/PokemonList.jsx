import { useState } from "react";
import "./PokemonList.css";
import { useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  // async function loadPokemon() {
  //   try {
  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  //     const data = await response.json();
  //     setPokemon(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    startFetching();
  }, []);

  return (
    <main>
      {/* <button type="button" className="button" onClick={loadPokemon}>
        Load Pokémon
      </button> */}
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
