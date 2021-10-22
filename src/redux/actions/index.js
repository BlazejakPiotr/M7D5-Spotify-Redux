export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const REMOVE_FROM_PLAYER = "REMOVE_FROM_PLAYER";

export const addToFavorite = (song) => ({
  type: ADD_TO_FAVORITE,
  payload: song,
});

export const removeFromFavorite = (song) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: song,
});

export const addToPlayer = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song,
});

export const removeFromPlayer = (song) => ({
  type: REMOVE_FROM_PLAYER,
  payload: song,
});
