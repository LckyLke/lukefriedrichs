import Link from 'next/link';
import React from 'react';
import { NavButtonProps } from '@/types/types';

const Button = ({ text, active, onClick }: NavButtonProps) => {
  return (
    <li>
      <button onClick={onClick}>
        <p
          className={
            ' text-text-main font-bold hover:bg-button-color-dark py-2 px-4 rounded-md button ' +
            (active ? 'button-active' : ' text-white')
          }
        >
          {text}
        </p>
      </button>
    </li>
  );
};

export default Button;
