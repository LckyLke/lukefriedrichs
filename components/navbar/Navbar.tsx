// components/Navbar.tsx
import React, { useState } from 'react';
import Button from './Button';
import { SectionType } from '@/types/types';
import { Switch } from '../ui/switch';
import { useTheme } from 'next-themes';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ICON_SIZE: number = 26;

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
    <div>
      <nav className="px-14  z-10 pt-2 w-full flex items-end justify-between pb-2 ">
        <ul className=" flex  justify-around w-5/12">
          <HoverCard className="hover:underline">
            <HoverCardTrigger asChild>
              <a
                href={'https://github.com/LckyLke/lukefriedrichs'}
                target="_blank"
              >
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/61435401?v=4" />
                    <AvatarFallback>LF</AvatarFallback>
                  </Avatar>
                  <span className=" ml-1">@LckyLke</span>
                </div>
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              The React Framework – created and maintained by @vercel.
            </HoverCardContent>
          </HoverCard>
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
        <div className="flex justify-between w-1/6">
          <a href="https://www.instagram.com/luke_0206/" target="_blank">
            <FaInstagram size={ICON_SIZE} />
          </a>
          <a
            href="https://www.linkedin.com/in/luke-friedrichs-b40a391aa"
            target="_blank"
          >
            <FaLinkedin size={ICON_SIZE} />
          </a>
          <a href="https://github.com/LckyLke/" target="_blank">
            <FaGithub size={ICON_SIZE} />
          </a>
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
        </div>
      </nav>
      <div className="animated-border relative"></div>
    </div>
  );
};

export default Navbar;
