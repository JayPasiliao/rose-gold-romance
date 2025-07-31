import React from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  animationDelay?: number;
  animationDuration?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  animationDelay = 0,
  animationDuration = 0.1
}) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-flip-rotate"
          style={{
            animationDelay: `${animationDelay + (index * animationDuration)}s`,
            animationDuration: '1.2s'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText; 