import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const songInPlayer = useSelector((state) => state.player.song);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1 offset-lg-2">
      <Row>
        <div className="col-lg-3 py-3 d-flex align-items-center text-white">
          <img
            src={songInPlayer.cover}
            style={{ width: "55px", height: "55px", marginRight: "10px" }}
          />
          <div className="d-flex flex-column justify-content-center">
            <div>{songInPlayer.title}</div>
            <div className="text-muted">{songInPlayer.artist.name}</div>
          </div>
        </div>
        <div className="col-lg-9">
          <Row>
            <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row>
                <a href="/">
                  <img src="/playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="/">
                  <img src="/playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </div>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div id="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Player;
