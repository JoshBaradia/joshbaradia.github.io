import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface AICoreProps {
  position?: [number, number, number];
  scale?: number;
  scrollProgress?: number;
}

const AICore = ({ position = [0, 0, 0], scale = 1, scrollProgress = 0 }: AICoreProps) => {
  const coreRef = useRef<THREE.Mesh>(null);
  const orbitsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coreRef.current) {
      // Pulsing core based on scroll and time
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 1;
      coreRef.current.scale.setScalar(pulse);
      coreRef.current.rotation.x += 0.01;
      coreRef.current.rotation.y += 0.01;
    }

    if (orbitsRef.current) {
      orbitsRef.current.rotation.y = scrollProgress * Math.PI * 4 + state.clock.elapsedTime * 0.5;
      orbitsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <group position={position} scale={scale}>
      {/* Central AI Core */}
      <Icosahedron ref={coreRef} args={[1, 1]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.5}
          wireframe={false}
          transparent
          opacity={0.8}
        />
      </Icosahedron>

      {/* Orbiting data nodes */}
      <group ref={orbitsRef}>
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 2 + (i % 2) * 0.5;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(angle * 2) * 0.5;

          return (
            <Sphere key={i} position={[x, y, z]} args={[0.1]}>
              <meshStandardMaterial
                color="#60a5fa"
                emissive="#3b82f6"
                emissiveIntensity={0.3}
              />
            </Sphere>
          );
        })}
      </group>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.02, 8, 32]} />
        <meshStandardMaterial
          color="#1e40af"
          emissive="#3b82f6"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default AICore;