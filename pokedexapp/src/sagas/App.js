import { all, call, fork, takeEvery,put } from "redux-saga/effects";
import { app } from "./../backend/App"
import {types} from "../constants/types"
import{setListPokemons} from '../actions/pokemon'

/// getListPokemons

const getListRequest = async () => {
    return await app
      .getList()
      .then((tabulator) => tabulator)
      .catch((error) => error);
  };
  
  function* getListFromRequest({ payload }) {
    
    try {
      const response = yield call(
        getListRequest,
       
      );
  
      if (response.message) {
        //yield put(showAlert(ALERT_ERROR, response.message));
      } else {
        yield put(setListPokemons(response.list));
      }
    } catch (error) {
      //yield put(showAlert(ALERT_ERROR, error));
    }
  }
  
  export function* getFromApi() {
    yield takeEvery(types.get_array, getListFromRequest);
  }

export default function* rootSaga() {
    yield all([
      fork(getFromApi),
     
    ]);
  }
  