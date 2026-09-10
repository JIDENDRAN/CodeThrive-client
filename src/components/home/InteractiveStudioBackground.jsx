import React, { useState, useEffect } from 'react';

export const InteractiveStudioBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xNorm = (e.clientX / innerWidth - 0.5) * 2;
      const yNorm = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x: xNorm * 10, y: yNorm * 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
      <div
        className="absolute inset-0 hidden lg:block bg-no-repeat bg-center transition-transform duration-500 ease-out opacity-90"
        style={{
          backgroundImage: 'url(/hero-vision-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          transform: `translate3d(${mousePos.x * 0.25}px, ${mousePos.y * 0.25}px, 0)`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/30 pointer-events-none" />

      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-radial from-slate-200/20 via-transparent to-transparent blur-[80px] pointer-events-none" />

      <div
        className="absolute top-1/3 right-[28%] w-60 h-60 rounded-full bg-cyan-400/10 blur-[70px] pointer-events-none animate-pulse"
        style={{ animationDuration: '4s' }}
      />
      <div
        className="absolute top-1/2 right-[22%] w-52 h-52 rounded-full bg-emerald-400/10 blur-[60px] pointer-events-none animate-pulse"
        style={{ animationDuration: '5s', animationDelay: '2s' }}
      />
    </div>
  );
};

export default InteractiveStudioBackground;

