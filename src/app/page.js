'use client';

import React from 'react';
import '../app/globals.css';
import VideoPlayer from '@/components/VideoPlayer';
import Sidebar from '@/components/Sidebar';
import Notifications from '@/components/Notification';

export default function Page() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          Video Chat
        </div>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="content" >
        <VideoPlayer />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </div>
  );
}
