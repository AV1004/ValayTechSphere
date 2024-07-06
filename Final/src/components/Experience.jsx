import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";
import { Office } from "./Office";
import { Avatar } from "./Avatar";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { framerMotionConfig } from "../config";
import * as THREE from "three";

export const Experience = ({ section, menuOpened }) => {
  const { viewport } = useThree();

  const cameraPositionX = useMotionValue();
  const cameraLookAtX = useMotionValue();

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -5 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  const characterContainerAboutRef = useRef();

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);

    // const postion = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(postion);
    // console.log([postion.x, postion.y, postion.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <group
        position={[1.945477272147525, 0.09000000000000001, 2.4272435072388965]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
      >
        <Avatar animation={section === 0 ? "Typing" : "Standing"} />
      </group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
        <group
          ref={characterContainerAboutRef}
          position={[-0.1, 0.1, -0.8]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        >
          {/* <Avatar animation={section === 0 ? "Typing" : "Standing"} /> */}
        </group>
      </motion.group>
      SKILLS
      <motion.group
        position={[0, -1.5, -11]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};
