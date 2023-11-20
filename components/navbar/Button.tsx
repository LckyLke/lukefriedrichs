import Link from 'next/link';
import React from 'react';
import { NavButtonProps } from '@/types/types';
import { Button as ShadButton } from '@/components/ui/button';

const Button = ({ text, active, onClick }: NavButtonProps) => {
  return (
    <li>
      <ShadButton
        variant="ghost"
        className={
          active
            ? 'bg-accent text-accent-foreground dark:bg-accent dark:text-accent-foreground'
            : ' '
        }
        onClick={onClick}
      >
        {text}
      </ShadButton>
    </li>
  );
};

export default Button;
