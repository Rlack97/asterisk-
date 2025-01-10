import React from "react";
import { useRef, useState, useEffect } from "react";
import styles from "./HeadPhone.module.css";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

function Model({ onLoaded }) {
  // GLTF 모델 로드
  const { scene } = useGLTF("/asterisk/models/purple_music.glb");

  useEffect(() => {
    // 모델이 로드된 후 onLoaded 콜백 호출
    onLoaded();
  }, [scene, onLoaded]);

  // 모델 반환
  return <primitive object={scene} />;
}

function CameraAnimation() {
  const cameraRef = useRef();
  const targetPosition = new Vector3(-0.5, 0.07, -0.25);
  const [animationComplete, setAnimationComplete] = useState(false);

  useFrame(({ camera }) => {
    if (!animationComplete) {
      // 매 프레임마다 카메라를 목표 위치로 부드럽게 이동
      camera.position.lerp(targetPosition, 0.05);
      camera.lookAt(0, 0, 0);

      const currentPosition = new Vector3(
        camera.position.x,
        camera.position.y,
        camera.position.z
      );
      const distance = currentPosition.distanceTo(targetPosition);
      if (distance < 0.01) {
        setAnimationComplete(true); // 애니메이션 완료 상태로 전환
      }
    }
  });

  return null;
}

export default function Headphone() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleModelLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div>
      <div className={styles.canvas}>
        {!isLoaded && <div className={styles.loading - styles.spinner}></div>}
        <Canvas
          style={{ height: "100%", width: "100%" }}
          camera={{ position: [-2, 0.07, 1], fov: 75 }}
        >
          <Model onLoaded={handleModelLoaded} />
          {isLoaded && <CameraAnimation />}
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
