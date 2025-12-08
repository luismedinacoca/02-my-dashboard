//import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";
import PokemonGrid from "./components/PokemonGrid";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  //throw new Error("This error must not happen 💣 🔥");

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Pokémons List & <span>Static</span>
      </span>

      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
