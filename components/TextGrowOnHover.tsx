import React, { useRef, useEffect } from 'react';

interface TextGrowOnHoverProps {
  className?: string;
  text: string;
  startDelay?: number;
  timeBetweenLetters?: number;
  showPulsingDot?: boolean;
}

const TextGrowOnHover: React.FC<TextGrowOnHoverProps> = ({
  text,
  className,
  startDelay = 0,
  timeBetweenLetters = 0.1,
  showPulsingDot = false,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  const applyStyle = (element: Element | null, scale: number) => {
    element?.setAttribute('style', `transform: scale(${scale});`);
  };

  const handleMouseEnter = (index: number) => {
    const letters = textRef.current?.children;
    if (letters) {
      applyStyle(letters[index], 1.4); // Main letter
      applyStyle(letters[index - 1], 1.3); // First neighbor
      applyStyle(letters[index + 1], 1.3); // First neighbor
      applyStyle(letters[index - 2], 1.2); // Second neighbor
      applyStyle(letters[index + 2], 1.2); // Second neighbor
    }
  };

  const handleMouseLeave = () => {
    Array.from(textRef.current?.children || []).forEach((letter: Element) => {
      letter.setAttribute('style', 'transform: scale(1);');
    });
  };

  useEffect(() => {
    const letters = Array.from(textRef.current?.children || []);
    letters.forEach((letter, index) => {
      letter.addEventListener('mouseenter', () => handleMouseEnter(index));
      letter.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      letters.forEach((letter) => {
        letter.removeEventListener('mouseenter', () => handleMouseEnter);
        letter.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
  const totalDuration = startDelay + text.length * timeBetweenLetters;
  return (
    <div ref={textRef} className="grow-text">
      {text.split('').map((char, index) => (
        <span
          key={index}
          style={{
            animationDelay: `${startDelay + index * timeBetweenLetters}s`,
          }}
          className={'grow-letter type-letter ' + className}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      {showPulsingDot && (
        <span
          style={{ animationDelay: `${totalDuration}s` }} // Delay the start of the dot's animation
          className={'pulsing-dot grow-letter ' + className}
        >
          {'|'}
        </span>
      )}
    </div>
  );
};

export default TextGrowOnHover;
