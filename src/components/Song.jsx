import React, { useEffect } from "react";
import { Heart } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../redux/actions";

const Song = ({ track }) => {
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
        <Heart onClick={() => toggle()} />
        {track.title}
      </span>

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
      </small>
    </div>
  );
};

export default Song;
