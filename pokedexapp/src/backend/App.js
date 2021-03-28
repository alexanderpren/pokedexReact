import axios from "axios";
import {getErrorMessage} from "./utils"


const getList = () => {
 
   
    return axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=50")
      .then((Response) => {
        return {
          list: Response.data,
          message: null,
        };
      })
      .catch((Error) => {
        return getErrorMessage(Error);
      }); 
};
export const app = {
    getList,
   
  };