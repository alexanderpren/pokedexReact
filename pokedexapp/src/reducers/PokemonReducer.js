import { types } from "../constants/types";
const initialState = [
  {
    arrayPokemons: [],
  },
];

export const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.set_array: {
      return {
        ...state,
        arrayPokemons: [...action.payload],
      };
    }
    case types.filter: {
     let word_to_find = action.payload.searchWord

      const newArray = state.arrayPokemons.filter((pokemon) =>
        Object.keys(pokemon).some((k) =>
          pokemon.name.toLowerCase().includes(word_to_find.toLowerCase())
        )
      );

      return {
        ...state,
        arrayPokemons: newArray,
      };
    }
    default:
      return state;
  }
};
