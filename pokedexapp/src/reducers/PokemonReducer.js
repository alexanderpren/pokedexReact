import { types } from "../constants/types";
const initialState = [
  {
    arrayPokemons: [],
  },
];


export const PokemonReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.set_array: {
     return{
       ...state,
       arrayPokemons: [...action.payload]
     }
    }
    default: 
     return state
    
  }
};
