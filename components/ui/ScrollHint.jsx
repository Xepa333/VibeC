import React, { useState, useEffect, useRef } from 'react';

const ScrollHint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const hasScrolled = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled.current) {
        hasScrolled.current = true;
        setIsVisible(false);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      if (!hasScrolled.current) {
        setIsVisible(true);
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 right-8 z-[100] flex flex-col items-center gap-2 text-white transition-opacity duration-1000 ${
        isVisible ? 'opacity-90' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!isVisible}
    >
      <span className="text-sm font-medium tracking-wider" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>Scroll down</span>
      <svg
        className="w-6 h-6 animate-bounce text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </div>
  );
};

export default ScrollHint;