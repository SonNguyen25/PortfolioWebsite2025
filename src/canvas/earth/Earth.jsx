/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useEffect, useMemo } from "react";
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

  const cleanMaterial = useMemo(
    () => (material) => {
      material.dispose();
      // Dispose textures if available.
      for (const key in material) {
        const value = material[key];
        if (value && value.dispose) {
          value.dispose();
        }
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      // Traverse the scene and dispose of geometries and materials.
      earth.scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => cleanMaterial(mat));
            } else {
              cleanMaterial(child.material);
            }
          }
        }
      });
    };
  }, [earth, cleanMaterial]);

  const memoizedScene = useMemo(() => {
    const clonedScene = earth.scene.clone();
    return clonedScene;
  }, [earth]);

  return (
    <primitive 
    // object={earth.scene} 
    object={memoizedScene} 
    scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const controlsRef = useRef();

  const isMobile = useMemo(() => {
    return (
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    );
  }, []);
  const dprValue = isMobile ? [0.5, 0.75] : [1, 2];

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.update();
    }
  }, []);

  return (
    <>
      {!isMobile && (<Canvas
      shadows
      frameloop="demand"
      // dpr={[1, 2]}
      dpr={dprValue}
      gl={{ preserveDrawingBuffer: false,
        powerPreference: "low-power"
       }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          ref={controlsRef}
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  )}
  </>
);
};

export default EarthCanvas;
