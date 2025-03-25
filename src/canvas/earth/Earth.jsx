/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";
import "./Earth.scss";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="canvas-loader-container">
      <span className="canvas-loader"></span>
      <p>{progress.toFixed(2)}%</p>
    </Html>
  );
};

const Earth = () => {
  const earth = useGLTF("/animations/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.update();
    }
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      // dpr={[1, 2]}
      dpr={[0.5,1]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
