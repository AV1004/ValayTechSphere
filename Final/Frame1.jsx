/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 .\public\models\Frame1.glb -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Frame1.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Node002" position={[-2.112, 1.551, 1.032]} rotation={[-1.608, -1.521, -1.608]} scale={[1.58, 1.883, 1.009]}>
        <mesh name="Node-Mesh002" geometry={nodes['Node-Mesh002'].geometry} material={materials['mat21.002']} />
        <mesh name="Node-Mesh002_1" geometry={nodes['Node-Mesh002_1'].geometry} material={materials['mat15.002']} />
        <mesh name="Node-Mesh002_2" geometry={nodes['Node-Mesh002_2'].geometry} material={materials['mat24.001']} />
      </group>
      <mesh name="Node004" geometry={nodes.Node004.geometry} material={materials['mat22.002']} position={[-2.112, 1.551, 1.032]} rotation={[-1.608, -1.521, -1.608]} scale={[1.58, 1.883, 1.009]} />
    </group>
  )
}

useGLTF.preload('/Frame1.glb')
