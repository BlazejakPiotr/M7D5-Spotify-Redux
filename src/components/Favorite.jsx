import React from "react";
import Song from "./Song";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";

const Favorite = () => {
  const isLiked = useSelector((state) => state.favorite.songs);
  console.log(isLiked);
  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        {/* {this.state.album.cover && (
          <div className="col-md-3 pt-5 text-center" id="img-container">
            <img
              src={this.state.album.cover}
              className="card-img img-fluid"
              alt="Album"
            />
            <div className="mt-4 text-center">
              <p className="album-title">{this.state.album.title}</p>
            </div>
            <div className="text-center">
              <p className="artist-name">
                {this.state.album.artist ? this.state.album.artist.name : ""}
              </p>
            </div>
            <div className="mt-4 text-center">
              <button id="btnPlay" className="btn btn-success" type="button">
                Play
              </button>
            </div>
          </div>
        )}
        <div className="col-md-8 p-5">
          <Row>
            <div className="col-md-10 mb-5" id="trackList">
              {this.state.songs.map((song) => (
                <Song
                  albumImg={this.state.album.cover}
                  track={song}
                  key={song.id}
                />
              ))}
            </div>
          </Row>
        </div> */}
      </Row>
    </div>
  );
};

export default Favorite;
