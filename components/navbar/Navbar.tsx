// components/Navbar.tsx
import React, { useState } from 'react';
import Button from './Button';
import { SectionType } from '@/types/types';
import { Switch } from '../ui/switch';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = ({
  activeSection,
  scrollToSection,
}: {
  activeSection: SectionType;
  scrollToSection: (sectionId: SectionType) => () => void;
}) => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(true);

  return (
    <nav className="px-4 fixed top-0 z-10 pt-2 w-full flex items-center justify-between border-b-2 border-gray-600 pb-2">
      <div>
        <Avatar>
          <AvatarImage src="/images/me_avatar.png" />
          <AvatarFallback>LF</AvatarFallback>
        </Avatar>
      </div>
      <ul className=" flex  justify-around w-5/6">
        <Button
          text={'Home'}
          onClick={scrollToSection('home')}
          active={activeSection == 'home'}
        />
        <Button
          text={'About'}
          onClick={scrollToSection('about')}
          active={activeSection == 'about'}
        />
        <Button
          text={'Projects'}
          onClick={scrollToSection('projects')}
          active={activeSection == 'projects'}
        />
        <Button
          text={'Contact'}
          onClick={scrollToSection('contact')}
          active={activeSection == 'contact'}
        />
      </ul>
      <Switch
        checked={checked}
        onCheckedChange={() => {
          setChecked(!checked);
          if (theme == 'dark') {
            setTheme('light');
            return;
          }
          setTheme('dark');
          console.log('switched!');
        }}
      />
    </nav>
  );
};

export default Navbar;
