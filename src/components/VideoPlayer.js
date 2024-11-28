'use client';

import React, { useContext } from 'react';
import { SocketContext } from '@/context/SocketContext';

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    toggleMic,
    isMicMuted, // Changed from isMicOn to isMicMuted to match the context
    toggleCamera,
    isCameraOff, // Changed from isCameraOn to isCameraOff to match the context
  } = useContext(SocketContext);

  return (
    <div className={`video-call-container ${callAccepted && !callEnded ? 'with-call' : ''}`}>
      {stream && (
        <div className="video-card local-video-card">
          <h3>{name || 'Your Name'}</h3>
          <video
            playsInline
            muted
            ref={(video) => {
              if (video && stream) video.srcObject = stream;
              myVideo.current = video;
            }}
            autoPlay
            className="video my-video"
          />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="video-card remote-video-card">
          <h3>{call.name || 'User2'}</h3>
          <video playsInline ref={userVideo} autoPlay className="video user-video" />
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="controls">
          <button onClick={toggleMic} className={`control-button ${isMicMuted ? 'muted' : ''}`}>
            {isMicMuted ? 'Mic Off' : 'Mic On'}
          </button>
          <button onClick={toggleCamera} className={`control-button ${isCameraOff ? 'disabled' : ''}`}>
            {isCameraOff ? 'Camera Off' : 'Camera On'}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
