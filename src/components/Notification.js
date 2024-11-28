'use client';

import React, { useContext } from 'react';
import { SocketContext } from '@/context/SocketContext';
import '../app/globals.css';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{marginTop:'25px',display:'flex',gap:'15px',flexDirection:'row'}}>
          <h3 style={{marginTop:'5px'}}>{call.name} is calling:</h3>
          <button onClick={answerCall}>Answer</button>
        </div>
      )}
    </>
  );
};

export default Notifications;
