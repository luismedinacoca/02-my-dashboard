import { Pokemon } from "@/pokemons";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache", // TODO: change this in future steps
  }).then((resp) => resp.json());

  console.log("🐼 Pokemon name:", pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const { id } = await params;
  console.log("ID:", id);
  const pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Hello Pokemon with ID: {id} - Page</h1>
      <pre>🔥 {JSON.stringify(pokemon, null, 2)}</pre>
    </div>
  );
}
