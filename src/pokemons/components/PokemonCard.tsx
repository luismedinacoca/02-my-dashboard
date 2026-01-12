"use client";

import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavourite } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;

  const isFav = useAppSelector((state) => !!state.pokemonFavorites[id]);
  //console.log({ isFav });

  const dispatch = useAppDispatch();
  const handleToggle = () => {
    console.log("click", pokemon);
    dispatch(toggleFavourite(pokemon));
  };
  if (!id) return null;
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

  const action = isFav
    ? { text: "remove", className: "font-bold text-red-500", suffix: " from favourite" }
    : { text: "add", className: "font-bold text-blue-500 italic text-sm", suffix: " to favourite" };

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded rounded-lg overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image key={id} src={imageUrl} width={100} height={100} alt={name} priority={false} />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More Info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            role="button"
            tabIndex={0}
            aria-label={isFav ? "Remove from favourites" : "Add to favourites"}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
            onClick={handleToggle}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleToggle();
              }
            }}
          >
            <div className="text-red-600">{isFav ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}</div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                {isFav ? "It's favourite" : "It's not favourite"}
              </p>
              <p className="text-xs text-gray-500">
                Click to <span className={action.className}>{action.text}</span>
                {action.suffix}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
