import React, { useRef, useEffect } from 'react';

interface TextGrowOnHoverProps {
  text: string;
}

const TextGrowOnHover: React.FC<TextGrowOnHoverProps> = ({ text }) => {
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

  return (
    <div ref={textRef} className="grow-text">
      {text.split('').map((char, index) => (
        <span key={index} className="grow-letter">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

export default TextGrowOnHover;
