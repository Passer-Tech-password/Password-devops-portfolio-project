"use client";

export default function GeometricBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-2] pointer-events-none overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-80"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF4D4D', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F9CB28', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#7928CA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#FF0080', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#007CF0', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#00DFD8', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Colorful Triangles - Left Side */}
        <path d="M0,0 L300,0 L0,300 Z" fill="url(#grad1)" opacity="0.6" />
        <path d="M0,300 L300,300 L0,600 Z" fill="url(#grad3)" opacity="0.5" />
        <path d="M0,600 L300,600 L0,900 Z" fill="url(#grad2)" opacity="0.4" />
        
        {/* Additional geometric accents */}
        <path d="M300,0 L600,0 L300,300 Z" fill="#1e1e1f" opacity="0.1" />
        <circle cx="100" cy="100" r="50" fill="url(#grad2)" filter="blur(40px)" opacity="0.4" />
      </svg>
    </div>
  );
}
