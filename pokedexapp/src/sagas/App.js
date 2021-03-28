import { all, call, fork, takeEvery } from "redux-saga/effects";
import { app } from "./../backend/App"
import {types} from "../constants/types"

/// getListPokemons

const getListRequest = async (module, appName, action, detail) => {
    return await app
      .getList()
      .then((tabulator) => tabulator)
      .catch((error) => error);
  };
  
  function* getListFromRequest({ payload }) {
    const { module, appName, action, detail } = payload;
    try {
      const response = yield call(
        getListRequest,
        module,
        appName,
        action,
        detail
      );
  
      if (response.message) {
        //yield put(showAlert(ALERT_ERROR, response.message));
      } else {
       // yield put(setListSuccess(appName, response.list, action));
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
  