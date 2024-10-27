import { configureStore } from "@reduxjs/toolkit";
import reduxPracticeReducer from "../features/ReduxPractice/reducPracticeSlice";

export const store = configureStore({
  reducer: reduxPracticeReducer,
});

/*

1] first create store (single source of truth) using configureStore in simple common db to store data to use across components
2] second Create slice which is portion of redux state which create initial state data and also contain action which is also called reducer, it is the only function which are been allowed to create , update or deleted inside store.
No other function is allowed to perform crud on store  
3] Export reducer in two ways 
    a] separate actions though destructure   export const {  reducerName } = nameSlice.actions;
    b] Create Complete reducer list to provide reducer details to store so it will allow our reducer to perform actions

4] this were all part of redux or also called redux-toolkit but now react has other library collaborated for optimization and handling state more easy with less boiler plate code
5] So it has 2 methods useDispatch and useSelector Hook which uses reducer action to perform operation on CRUD.

*/
