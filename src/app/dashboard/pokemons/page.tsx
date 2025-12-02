import Image from "next/image";
import { PokemonsResponse } from "./interfaces/pokemon-response";
import { SimplePokemon } from "./interfaces/simple-pokemon";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`).then(
    (res) => res.json()
  );

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      {/*<h1>{JSON.stringify(pokemons)}</h1>*/}
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg`}
          width={100}
          height={100}
          alt="name"
        />
      </div>
    </div>
  );
}
