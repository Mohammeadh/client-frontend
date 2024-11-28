'use client';

import { ContextProvider } from '@/context/SocketContext'; // Ensure the correct import path
import '../app/globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="icon" href="/favicon.ico" />
      <link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  rel="stylesheet"
/>

      </head>
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
