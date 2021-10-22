import React, { useEffect } from "react";
import { Heart, Play } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  addToPlayer,
  removeFromFavorite,
} from "../redux/actions";

const Song = ({ track, albumImg }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.favorite.songs.find((t) => t.id === track.id)
  );

  const toggle = () => {
    if (isLiked === undefined) {
      dispatch(addToFavorite(track));
    } else {
      dispatch(removeFromFavorite(track));
    }
  };

  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        <Play
          onClick={() => dispatch(addToPlayer({ ...track, cover: albumImg }))}
        />
        {track.title}
      </span>

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
        <Heart onClick={() => toggle()} />
      </small>
    </div>
  );
};

export default Song;
