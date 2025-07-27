import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

interface NeuralNetworkProps {
  position?: [number, number, number];
  scale?: number;
  interactive?: boolean;
}

const NeuralNetwork = ({ position = [0, 0, 0], scale = 1, interactive = false }: NeuralNetworkProps) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate neural network structure
  const { nodes, connections } = useMemo(() => {
    const layers = [4, 6, 4, 2]; // Neural network layers
    const nodePositions: Array<[number, number, number]> = [];
    const connections: Array<{ start: [number, number, number], end: [number, number, number] }> = [];
    
    // Generate node positions
    layers.forEach((nodeCount, layerIndex) => {
      for (let i = 0; i < nodeCount; i++) {
        const x = (layerIndex - layers.length / 2) * 2;
        const y = (i - nodeCount / 2) * 1.2;
        const z = 0;
        nodePositions.push([x, y, z]);
        
        // Create connections to next layer
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = nodePositions.length;
          const nextLayerSize = layers[layerIndex + 1];
          
          for (let j = 0; j < nextLayerSize; j++) {
            const nextX = ((layerIndex + 1) - layers.length / 2) * 2;
            const nextY = (j - nextLayerSize / 2) * 1.2;
            const nextZ = 0;
            
            connections.push({
              start: [x, y, z],
              end: [nextX, nextY, nextZ]
            });
          }
        }
      }
    });
    
    return { nodes: nodePositions, connections };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      if (interactive) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      } else {
        groupRef.current.rotation.y += 0.005;
      }
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Neural nodes */}
      {nodes.map((nodePos, index) => (
        <Sphere key={index} position={nodePos} args={[0.1]}>
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#1e40af" 
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
      
      {/* Neural connections */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={[connection.start, connection.end]}
          color="#60a5fa"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
};

export default NeuralNetwork;