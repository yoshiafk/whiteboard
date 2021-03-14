import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducers";
import { composeWithDevTools } from "redux-devtools-extension";

//cb persist
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
}
//cb persist
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

//cb persist
const persistedState = loadFromLocalStorage();

let store = createStore(
  rootReducer,
  //cb persist
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
//cb persist
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
