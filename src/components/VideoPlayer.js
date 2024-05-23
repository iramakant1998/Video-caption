import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, captions }) => {
  const playerRef = React.useRef(null);
  const [currentTime, setCurrentTime] = React.useState(0);

  const handleProgress = ({ playedSeconds }) => {
    setCurrentTime(playedSeconds);
  };

  const currentCaption = captions.find(
    (caption) =>
      currentTime >= caption.startTime && currentTime <= caption.endTime
  );

  return (
    <div className="video-player-container">
      <ReactPlayer
        className="react-player"
        ref={playerRef}
        url={url}
        controls
        onProgress={handleProgress}
      />
      <div className="caption">{currentCaption ? currentCaption.text : ""}</div>
    </div>
  );
};

export default VideoPlayer;
