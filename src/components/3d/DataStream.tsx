import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface DataStreamProps {
  position?: [number, number, number];
  count?: number;
  scrollProgress?: number;
}

const DataStream = ({ position = [0, 0, 0], count = 1000, scrollProgress = 0 }: DataStreamProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Create flowing data stream pattern
      const t = i / count;
      const radius = 2 + Math.sin(t * Math.PI * 4) * 0.5;
      const angle = t * Math.PI * 8;
      
      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = t * 20 - 10; // Vertical flow
      positions[i3 + 2] = Math.sin(angle) * radius;
      
      // Blue to cyan gradient
      const intensity = Math.random() * 0.5 + 0.5;
      colors[i3] = 0.2 * intensity; // R
      colors[i3 + 1] = 0.5 * intensity; // G
      colors[i3 + 2] = 1.0 * intensity; // B
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      // Animate based on scroll progress and time
      pointsRef.current.rotation.y = scrollProgress * Math.PI * 2 + state.clock.elapsedTime * 0.1;
      
      // Flow animation
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += 0.02; // Flow upward
        
        // Reset particles that flow out of bounds
        if (positions[i3 + 1] > 10) {
          positions[i3 + 1] = -10;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        size={0.05}
        transparent
        opacity={0.8}
        sizeAttenuation
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

export default DataStream;