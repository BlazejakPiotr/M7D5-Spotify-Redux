import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions";
import { initialState } from "../store";

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        songs: state.songs.filter((song) => song.id !== action.payload.id),
      };

    default:
      return state;
  }
};
