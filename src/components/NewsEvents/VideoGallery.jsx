import React, { useEffect, useRef } from "react";
import "./NewsEvents.css";

const VideoGallery = () => {
  const playerRefs = useRef([]);
  const videoIds = [
    "J8JBnItjYro",
    "kEwjGByHjjs",
    "6E1-lld0bq8",
    "WY4FeUYMFzM",
    "_Uikei1aZPM",
    "D_2UT9P5sLo",
  ];

  const getYouTubeEmbedUrl = (videoId) =>
    `https://www.youtube.com/embed/${videoId}`;

  useEffect(() => {
    loadYouTubeIframeAPI();
    window.onYouTubeIframeAPIReady = () => {
      playerRefs.current = videoIds.map((videoId, index) => {
        return new window.YT.Player(`player-${index}`, {
          videoId,
          events: {
            onStateChange: onPlayerStateChange,
          },
        });
      });
    };
  }, []);

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      playerRefs.current.forEach((player) => {
        if (player.getIframe().id !== event.target.getIframe().id) {
          player.pauseVideo();
        }
      });
    }
  };

  const loadYouTubeIframeAPI = () => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  };

  return (
    <div className="video-gallery">
      {videoIds.map((videoId, index) => (
        <div key={index} className="video-item">
          <div id={`player-${index}`} />
        </div>
      ))}
    </div>
  );
};

export default VideoGallery;
