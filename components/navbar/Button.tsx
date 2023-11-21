import Link from 'next/link';
import React, { useState } from 'react';
import { NavButtonProps } from '@/types/types';
import { Button as ShadButton } from '@/components/ui/button';

const Button = ({ text, active, onClick }: NavButtonProps) => {
  // State to manage button's enabled/disabled status
  const [isDisabled, setIsDisabled] = useState(false);

  // Handle button click
  const handleClick = () => {
    setIsDisabled(true); // Disable button
    onClick(); // Call the original onClick function

    // Re-enable the button after 1 second
    setTimeout(() => setIsDisabled(false), 950);
  };

  return (
    <li>
      <ShadButton
        variant="ghost"
        className={
          active
            ? 'bg-accent text-accent-foreground dark:bg-accent dark:text-accent-foreground'
            : ' '
        }
        onClick={handleClick}
      >
        {text}
      </ShadButton>
    </li>
  );
};

export default Button;
