import React, { useEffect } from "react";
import {
  Heart,
  HeartFill,
  Pause,
  Play,
  PlayBtnFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToFavorite,
  addToPlayer,
  removeFromFavorite,
} from "../redux/actions";

const Song = ({ track, albumImg, albumTitle }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.favorite.songs.find((t) => t.id === track.id)
  );
  const isItPlayerSong = useSelector(
    (state) => state.player.song.id === track.id
  );

  const toggle = () => {
    if (isLiked === undefined) {
      dispatch(
        addToFavorite({ ...track, cover: albumImg, albumTitle: albumTitle })
      );
    } else {
      dispatch(
        removeFromFavorite({
          ...track,
          cover: albumImg,
          albumTitle: albumTitle,
        })
      );
    }
  };

  return (
    <div className="py-3 trackHover">
      <span className="card-title trackHover px-3" style={{ color: "white" }}>
        {isItPlayerSong ? (
          <Pause className="mr-3" />
        ) : (
          <Play
            className="mr-3"
            onClick={() => dispatch(addToPlayer({ ...track, cover: albumImg }))}
          />
        )}
        {track.title}
      </span>

      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
        {isLiked ? (
          <HeartFill
            style={{ color: "green" }}
            className="ml-3"
            onClick={() => toggle()}
          />
        ) : (
          <Heart className="ml-3" onClick={() => toggle()} />
        )}
      </small>
    </div>
  );
};

export default Song;
