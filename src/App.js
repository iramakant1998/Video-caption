import React, { useState } from "react";
import CaptionInput from "./components/CaptionInput";
import VideoPlayer from "./components/VideoPlayer";
import "./index.css";

const App = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    setCaptions([...captions, caption]);
  };

  return (
    <div className="container">
      <h1>Video Caption App</h1>
      <input
        type="text"
        placeholder="Enter video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="video-url-input"
      />
      {videoUrl && (
        <div>
          <CaptionInput addCaption={addCaption} />
          <VideoPlayer url={videoUrl} captions={captions} />
        </div>
      )}
    </div>
  );
};

export default App;
