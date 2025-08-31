import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stars } from "@react-three/drei";

// Loads the 3D model and sets up the continuous rotation
function SpaceObject() {
  const { scene } = useGLTF("/Portfolio/models/island2.glb");
  const modelRef = useRef();

  // This hook runs on every frame
  useFrame(() => {
    if (modelRef.current) {
      // Adjust the value to control rotation speed
      modelRef.current.rotation.y += 0.002;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.5}
      position={[0, -1.5, 0]}
    />
  );
}

function ThreeScene() {
  // Lock canvas container to initial viewport height to avoid mobile URL bar resize jank
  const [vh, setVh] = useState(() => (typeof window !== 'undefined' ? window.innerHeight : 0));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateOnOrientation = () => setVh(window.innerHeight);

    // Only update height on orientation change (not on scroll-induced visual viewport changes)
    window.addEventListener('orientationchange', updateOnOrientation);

    return () => {
      window.removeEventListener('orientationchange', updateOnOrientation);
    };
  }, []);

  return (
    <div className="three-canvas" style={{ height: vh ? `${vh}px` : '100vh' }}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 18], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={["#191920"]} />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <SpaceObject />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default ThreeScene;
