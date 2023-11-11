// ThreeDText.tsx
import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import poppins from '../assets/Poppins_Bold.json';

// Import the TextGeometry
import { TextGeometry } from 'three/examples/jsm/Addons.js';

// Extend will make TextGeometry available as a JSX element
extend({ TextGeometry });

const ThreeDText: React.FC = () => {
  const font = new FontLoader().parse(poppins);

  return (
    <mesh>
      <textGeometry args={['Luke', { font, size: 1, height: 1 }]} />
      <meshStandardMaterial attach="material" color={'white'} />
    </mesh>
  );
};

export default ThreeDText;
