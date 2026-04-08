import './globals.css';

export const metadata = {
  title: 'Next.js Foundations',
  description: 'Learning the foundations of Next.js with React.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: '2rem', 
        fontFamily: "'Outfit', sans-serif",
        backgroundColor: '#0a0a0a',
        color: '#ededed',
        minHeight: '100vh',
        lineHeight: '1.6'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '1.5rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
