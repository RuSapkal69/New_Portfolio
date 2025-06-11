import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Earth({ scale = 1 }) {
  const earthRef = useRef();
  const gltf = useLoader(GLTFLoader, "./models/earth_1.glb");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.scale.setScalar(scale * 2);
    }
  }, [gltf, scale]);

  return (
    <primitive ref={earthRef} object={gltf.scene} position={[0, 0, 0]} />
  );
}

function EarthModel({ scale = 1 }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense
          fallback={
            <mesh>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#4a90e2" wireframe />
            </mesh>
          }
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Earth scale={scale} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default EarthModel;
