import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import FavoriteSong from "./FavoriteSong";

const Favorite = () => {
  const favoriteSongs = useSelector((state) => state.favorite.songs);

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-md-12 p-5">
          <h4 className="text-white mb-5">Favorite songs:</h4>
          <Row className="text-white">
            <Col>Title/Artist</Col>
            <Col>Album</Col>
            <Col>Duration</Col>
          </Row>
          <Row>
            <div className="col-md-10 mb-5" id="trackList">
              {favoriteSongs.map((song) => (
                <FavoriteSong
                  albumImg={song.cover}
                  albumTitle={song.albumTitle}
                  track={song}
                  key={song.id}
                />
              ))}
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Favorite;
