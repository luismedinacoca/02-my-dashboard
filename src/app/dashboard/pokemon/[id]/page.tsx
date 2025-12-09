import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

/*
export const metadata = {
  title: "SEO Title",
  description: "SEO Description",
};
*/

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return {
    title: `Pokemon #${id} - ${pokemon.name}`,
    description: `${pokemon.name} page`,
  };
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
      <pre>🔥 {pokemon.name}</pre>
    </div>
  );
}
