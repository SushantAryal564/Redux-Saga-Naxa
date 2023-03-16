import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/dataReducer";
import dataSaga from "./sagas/data";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(dataSaga);
export default store;
