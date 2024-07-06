/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 .\public\models\PCSetup.glb -k 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/PCSetup.glb");
  return (
    <group {...props} dispose={null}>
      <group
        name="Plane001_Plane002"
        position={[-0.044, 0, -1.62]}
        rotation={[Math.PI, -1.563, Math.PI]}
        scale={0.84}
      >
        <mesh
          name="Plane001_Plane002_BlackWood"
          geometry={nodes.Plane001_Plane002_BlackWood.geometry}
          material={materials.BlackWood}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_1"
          geometry={nodes.Plane001_Plane002_BlackWood_1.geometry}
          material={materials.GrayPlastic}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_2"
          geometry={nodes.Plane001_Plane002_BlackWood_2.geometry}
          material={materials.BlackCoatSteel}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_3"
          geometry={nodes.Plane001_Plane002_BlackWood_3.geometry}
          material={materials.WhiteSteelScrew}
        />
        <mesh
          name="Plane001_Plane002_BlackWood_4"
          geometry={nodes.Plane001_Plane002_BlackWood_4.geometry}
          material={materials.BlackPlastic}
        />
      </group>
      <mesh
        name="Monitor"
        geometry={nodes.Monitor.geometry}
        material={materials.Mat}
        position={[0.224, 0.788, -1.718]}
        rotation={[0, 1.438, 0]}
        scale={0.007}
      />
      <mesh
        name="Keyboard"
        geometry={nodes.Keyboard.geometry}
        material={materials["Mat.001"]}
        position={[-0.018, 0.807, -1.453]}
        rotation={[0, -0.188, 0]}
        scale={0.006}
      />
      <mesh
        name="ComputerMouse_mesh"
        geometry={nodes.ComputerMouse_mesh.geometry}
        material={materials.ComputerMouse_mat1}
        position={[0.364, 0.797, -1.305]}
        rotation={[-Math.PI, 0.083, -Math.PI]}
        scale={0.022}
      />
      <group
        name="pCube37"
        position={[0.555, 0.82, -1.302]}
        rotation={[0, 0.003, 0]}
        scale={-0.001}
      >
        <mesh
          name="pCube37_1"
          geometry={nodes.pCube37_1.geometry}
          material={materials.blinn9SG}
        />
        <mesh
          name="pCube37_1_1"
          geometry={nodes.pCube37_1_1.geometry}
          material={materials.blinn2SG}
        />
        <mesh
          name="pCube37_1_2"
          geometry={nodes.pCube37_1_2.geometry}
          material={materials.blinn11SG}
        />
        <mesh
          name="pCube37_1_3"
          geometry={nodes.pCube37_1_3.geometry}
          material={materials.blinn4SG}
        />
        <mesh
          name="pCube37_1_4"
          geometry={nodes.pCube37_1_4.geometry}
          material={materials.blinn6SG}
        />
        <mesh
          name="pCube37_1_5"
          geometry={nodes.pCube37_1_5.geometry}
          material={materials.blinn7SG}
        />
        <mesh
          name="pCube37_1_6"
          geometry={nodes.pCube37_1_6.geometry}
          material={materials.blinn5SG}
        />
      </group>
      <group
        name="group173738516"
        position={[-0.108, 0.25, -0.808]}
        rotation={[-Math.PI, 0.289, -Math.PI]}
        scale={0.681}
      >
        <mesh
          name="mesh173738516"
          geometry={nodes.mesh173738516.geometry}
          material={materials.mat16}
        />
        <mesh
          name="mesh173738516_1"
          geometry={nodes.mesh173738516_1.geometry}
          material={materials.mat11}
        />
        <mesh
          name="mesh173738516_2"
          geometry={nodes.mesh173738516_2.geometry}
          material={materials.mat15}
        />
        <mesh
          name="mesh173738516_3"
          geometry={nodes.mesh173738516_3.geometry}
          material={materials["mat23.001"]}
        />
      </group>
      <mesh
        name="Monitor001"
        geometry={nodes.Monitor001.geometry}
        material={materials.Mat}
        position={[0.224, 0.788, -1.718]}
        rotation={[0, 1.438, 0]}
        scale={0.007}
      />
    </group>
  );
}

useGLTF.preload("/PCSetup.glb");
