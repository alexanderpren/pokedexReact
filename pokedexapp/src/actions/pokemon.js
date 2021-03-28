import {types} from "../constants/types"

export const getPokemons = () => ({
  type: types.get_array,
});

export const setListPokemons = (array) => {
  console.log(array)
}
 
 