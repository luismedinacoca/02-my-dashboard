const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(`http://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemonData = await data.json();
  return pokemonData;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();
  return (
    <div>
      <h1>{JSON.stringify(pokemons)}</h1>
    </div>
  );
}
