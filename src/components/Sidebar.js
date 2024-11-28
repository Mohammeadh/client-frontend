'use client';

import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '@/context/SocketContext';

const Sidebar = ({children}) => {
   const { me,callAccepted,name,setName,leaveCall,callUser,callEnded } = useContext(SocketContext);
  const[id,setIdtoCall]=useState('')

  return(
    <div>
      <div>
        <div>
              <div style={{display:'flex',gap:'40px',flexDirection:'column'}}>
                <div>
                  <h3>Account Info</h3>
                  <div style={{display:'flex',gap:'20px',flexDirection:'column'}}>

                  <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
                  <button onClick={()=>{
                    navigator.clipboard.writeText(me)
                  }}>Copy Your id</button>
                  </div>
                
                </div>

                <div>
                  <h3>Make a call</h3>
                  <div style={{display:'flex',gap:'20px',flexDirection:'column'}}>
                 <div>

                   <input placeholder="Id To Call" value={id} onChange={(e)=>setIdtoCall(e.target.value)} />
                  </div>
                  <div>
                  {callAccepted && !callEnded ? (
                    <div>
                      <button onClick={leaveCall}>Hang Up</button>
                    </div>
                  ):
                  <div>
                      <button onClick={()=>
                        {
                          console.log(id)
                          callUser(id)}}
                          >Call</button>
                  </div>
                  } 
                  </div>
                  </div>
                   
                </div>
              </div>
         
        </div>
      </div>
      {children}
    </div>
  )
};

export default Sidebar;
