import axios from "axios";
import {getErrorMessage} from "./utils"


const getList = () => {
   
  console.log("HOLAAAAAA");
  /* 
    return axios
      .get()
      .then((Response) => {
        return {
          list: Response.data,
          message: null,
        };
      })
      .catch((Error) => {
        return getErrorMessage(Error);
      }); */
  };
export const app = {
    getList,
   
  };