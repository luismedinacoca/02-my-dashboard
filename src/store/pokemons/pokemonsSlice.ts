import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  reducers: {
    toggleFavourite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      // if pokemon ID is in the state, delete it
      if (!!state[id]) {
        // state[id] !== undefined
        delete state[id];
        return;
      }

      state[id] = pokemon;
    },
  },
});

export const { toggleFavourite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
