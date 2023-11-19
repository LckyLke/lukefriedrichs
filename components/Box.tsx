import { createRoot } from 'react-dom/client';
import React, { useRef, useState } from 'react';
import { Canvas, ThreeEvent, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Text } from '@react-three/drei';

export default function Box(props: any) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null!);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [curRotationGoal, setCurRotationGoal] = useState(90);
  const [rotation, setRotation] = useState([0, 0, 0]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (
      active &&
      meshRef.current.rotation.y <= (curRotationGoal * Math.PI) / 180
    ) {
      meshRef.current.rotation.y += delta;
      console.log(meshRef.current.rotation.y);
    } else if (active) {
      setActive(false);
      setCurRotationGoal((prev: number) => (prev += 90));
    }
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={3}
      castShadow={true}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}
