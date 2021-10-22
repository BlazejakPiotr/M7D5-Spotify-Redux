import { ADD_TO_PLAYER, REMOVE_FROM_PLAYER } from "../actions";
import { initialState } from "../store";

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        song: action.payload,
      };
    // case REMOVE_FROM_PLAYER:
    //   return {
    //     ...state,
    //     song: songs.filter((song) => song.id !== action.payload.id),
    //   };

    default:
      return state;
  }
};
