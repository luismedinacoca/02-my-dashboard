import PokemonGrid from "../../../pokemons/components/PokemonGrid";

export const metadata = {
  title: "Favourites",
  description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-center">
        Favourites Pokémons & <span className="text-blue-500">Global State</span>
      </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
