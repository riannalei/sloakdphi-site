// app/layout.server.js
export const metadata = {
    title: 'αΚΔΦ',
    description: 'San Luis Obispo Chapter Website',
  };
  
  export default function ServerWrapper({ children }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
  