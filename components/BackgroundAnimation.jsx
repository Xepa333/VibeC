import React, { useMemo } from 'react';

// Memoized Dot to prevent re-renders on parent state change
const Dot = React.memo(({ style, className }: { style: React.CSSProperties; className: string }) => (
  <div className={`absolute rounded-full ${className}`} style={style} />
));
Dot.displayName = 'Dot';

const BackgroundAnimation = () => {
    const layers = useMemo(() => [
        { count: 400, size: 1, opacityClass: 'bg-white/20', minDuration: 40, maxDuration: 80 }, // Far
        { count: 150, size: 1.5, opacityClass: 'bg-white/40', minDuration: 25, maxDuration: 50 }, // Mid
        { count: 125, size: 2.5, opacityClass: 'bg-white/60', minDuration: 15, maxDuration: 30 }, // Near
    ], []);

    const dots = useMemo(() => {
        return layers.flatMap((layer, layerIndex) =>
            Array.from({ length: layer.count }).map((_, i) => {
                const animationDuration = `${Math.random() * (layer.maxDuration - layer.minDuration) + layer.minDuration}s`;
                const animationDelay = `-${Math.random() * layer.maxDuration}s`;

                return {
                    id: `dot-${layerIndex}-${i}`,
                    style: {
                        width: `${layer.size}px`,
                        height: `${layer.size}px`,
                        top: '110vh',
                        left: `${Math.random() * 100}%`,
                        animationDuration,
                        animationDelay,
                    },
                    className: `animate-drift ${layer.opacityClass}`,
                };
            })
        );
    }, [layers]);

    return (
        <div
            className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[#0d1124]"
            aria-hidden="true"
        >
             {dots.map((dot) => (
                <Dot key={dot.id} style={dot.style} className={dot.className} />
            ))}
        </div>
    );
};

export default BackgroundAnimation;