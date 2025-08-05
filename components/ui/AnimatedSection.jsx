
import React, { useEffect, useState, useRef } from 'react';

export const useScrollObserver = (options?: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);

  return [containerRef, isVisible] as const;
};

export const AnimatedSection = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const [ref, isVisible] = useScrollObserver({ threshold: 0.1 });
  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 sm:py-24 transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};