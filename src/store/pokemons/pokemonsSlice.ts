import { createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

/*
  {
    '1': {id: 1, name 'bulbasaur'},...
  }
*/

interface PokemonState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonState = {
  "1": { id: "1", name: "bulbasaur" },
  "2": { id: "2", name: "Ivysaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
