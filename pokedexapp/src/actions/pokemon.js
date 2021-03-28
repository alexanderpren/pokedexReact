import {types} from "../constants/types"

export const getPokemons = () => ({
  type: types.get_array,
});

export const filter = (searchWord) => ({
  type: types.filter,
  payload: {searchWord: searchWord},
});

export const setListPokemons = (array) => ({
  type: types.set_array,
  payload: array,
});
 

export const showAlert= (type, message) => {
  /* TODO: Finalizar la parte de Alertas en reducer y aqui en esta accion para todos. */
console.log(type, message);
}
 