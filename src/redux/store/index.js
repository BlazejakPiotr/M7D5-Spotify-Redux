import { compose, applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { favoriteReducer } from "../reducer/favorite";
import { playerReducer } from "../reducer/player";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favorite: {
    songs: [],
  },
  player: {
    song: {},
  },
};

const reducer = combineReducers({
  favorite: favoriteReducer,
  player: playerReducer,
});

const configureStore = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default configureStore;
