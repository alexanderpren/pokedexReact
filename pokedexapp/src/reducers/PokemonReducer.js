import { types } from "../constants/types";
const initialState = [{
"name": "bulbasur","id":1},{"name": "ivysaur","id":2

}

];


export const PokemonReducer = (state=initialState, action) => {
  switch (action.type) {
    case types.set_array: {
      break;
    }
    default: 
     return state
    
  }
};
