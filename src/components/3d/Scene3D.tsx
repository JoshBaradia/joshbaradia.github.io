import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import NeuralNetwork from './NeuralNetwork';
import DataStream from './DataStream';
import AICore from './AICore';

interface Scene3DProps {
  scrollProgress: number;
  section: 'hero' | 'about' | 'experience' | 'projects' | 'skills';
  interactive?: boolean;
}

const Scene3D = ({ scrollProgress, section, interactive = false }: Scene3DProps) => {
  const renderContent = () => {
    switch (section) {
      case 'hero':
        return (
          <>
            <AICore position={[0, 0, 0]} scrollProgress={scrollProgress} />
            <DataStream position={[0, 0, 0]} scrollProgress={scrollProgress} />
          </>
        );
      case 'about':
        return <NeuralNetwork position={[0, 0, 0]} interactive={interactive} />;
      case 'experience':
        return (
          <>
            <DataStream position={[-2, 0, 0]} count={500} />
            <NeuralNetwork position={[2, 0, 0]} scale={0.8} />
          </>
        );
      case 'projects':
        return (
          <>
            <AICore position={[0, 0, 0]} scale={0.6} scrollProgress={scrollProgress} />
            <NeuralNetwork position={[3, 0, 0]} scale={0.5} />
            <NeuralNetwork position={[-3, 0, 0]} scale={0.5} />
          </>
        );
      case 'skills':
        return (
          <>
            <DataStream position={[0, 0, 0]} count={800} />
            <AICore position={[0, 0, 0]} scale={0.4} scrollProgress={scrollProgress} />
          </>
        );
      default:
        return <AICore position={[0, 0, 0]} scrollProgress={scrollProgress} />;
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
          
          {renderContent()}
          
          <Environment preset="city" />
          
          {interactive && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;