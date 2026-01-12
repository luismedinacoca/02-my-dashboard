"use client";
import { useAppSelector } from "@/store";
import PokemonGrid from "./PokemonGrid";

const FavouritePokemons = () => {
  console.log("favourite-Pokemons component");
  const favouritePokemons = useAppSelector((state) => Object.values(state.pokemonFavorites));

  return (
    <div>
      <PokemonGrid pokemons={favouritePokemons} />
    </div>
  );
};

export default FavouritePokemons;
