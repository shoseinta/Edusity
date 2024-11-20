import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import "./VideoPlayer.css";
import video from "../../../assets/Our Kim Jong Un [Subtitles].mp4";
import { AppContext } from "../../../Contexts/AppContext";

const VideoPlayer = () => {
  const { playState, setPlayState } = useContext(AppContext);
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

VideoPlayer.propTypes = {
  playState: PropTypes.bool.isRequired,
  setPlayState: PropTypes.func.isRequired,
};

export default VideoPlayer;
