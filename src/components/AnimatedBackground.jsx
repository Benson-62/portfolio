import React from 'react';

export default function AnimatedBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 60% 40%, #3a3f7d 60%, #181c2b 100%)',
      transition: 'background 1s',
    }}>
      {/* Animated blurred circles */}
      <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
        <filter id="blurMe"><feGaussianBlur stdDeviation="60" /></filter>
        <circle cx="80%" cy="30%" r="180" fill="#7f5af0" opacity="0.18" filter="url(#blurMe)">
          <animate attributeName="cy" values="30%;40%;30%" dur="8s" repeatCount="indefinite" />
        </circle>
        <circle cx="20%" cy="80%" r="120" fill="#00ff99" opacity="0.12" filter="url(#blurMe)">
          <animate attributeName="cy" values="80%;70%;80%" dur="10s" repeatCount="indefinite" />
        </circle>
        <circle cx="50%" cy="60%" r="100" fill="#ff8906" opacity="0.10" filter="url(#blurMe)">
          <animate attributeName="cx" values="50%;60%;50%" dur="12s" repeatCount="indefinite" />
        </circle>
      </svg>
      {/* Subtle animated noise overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
        mixBlendMode: 'overlay',
        opacity: 0.5,
        animation: 'noiseMove 6s linear infinite',
      }} />
      <style>{`
        @keyframes noiseMove {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}</style>
    </div>
  );
} 