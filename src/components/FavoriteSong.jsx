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
import { Row, Col } from "react-bootstrap";

const FavoriteSong = ({ track, albumImg, albumTitle }) => {
  const dispatch = useDispatch();
  const isLiked = useSelector((state) =>
    state.favorite.songs.find((t) => t.id === track.id)
  );
  const isItPlayerSong = useSelector(
    (state) => state.player.song.id === track.id
  );

  const toggle = () => {
    if (isLiked === undefined) {
      dispatch(addToFavorite({ ...track, cover: albumImg }));
    } else {
      dispatch(removeFromFavorite({ ...track, cover: albumImg }));
    }
  };

  return (
    <div className="py-3 trackHover d-flex justify-content-between">
      <Col>
        <span
          className="card-title trackHover px-3 "
          style={{ color: "white" }}
        >
          <div className="d-flex">
            <div className="d-flex align-items-center">
              {isItPlayerSong ? (
                <Pause className="mr-3" />
              ) : (
                <Play
                  className="mr-3"
                  onClick={() =>
                    dispatch(addToPlayer({ ...track, cover: albumImg }))
                  }
                />
              )}
            </div>
            <img
              src={track.cover}
              style={{ width: "55px", height: "55px", marginRight: "10px" }}
            />
            <div>
              <div>{track.title}</div>
              <div className="text-muted">{track.artist.name}</div>
            </div>
          </div>
        </span>
      </Col>
      <Col className="d-flex align-items-center">
        <div className="text-white ">{track.albumTitle}</div>
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
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
      </Col>
    </div>
  );
};

export default FavoriteSong;
