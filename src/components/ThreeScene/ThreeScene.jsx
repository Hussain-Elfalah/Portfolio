import React, { Suspense, useRef } from "react";
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
  return (
    <Canvas className="three-canvas" camera={{ position: [0, 0, 18], fov: 55 }}>
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
  );
}

export default ThreeScene;
