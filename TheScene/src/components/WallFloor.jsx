import { useGLTF, useTexture } from "@react-three/drei";
import React from "react";

export const WallFloor = () => {
  const { scene } = useGLTF("models/WallFloor.glb");
  const texture = useTexture("textures/floor.jpg");
  return (
    <group>
      <primitive object={scene}>
        <meshStandardMaterial map={texture} />
      </primitive>
    </group>
  );
};
