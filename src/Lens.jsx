import * as THREE from 'three'
import { useState, useRef } from 'react'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  useGLTF,
  Scroll,
  MeshTransmissionMaterial,
} from '@react-three/drei'
import { easing } from 'maath'
import Images from './Images.jsx'

export default function Lens(children, damping = 0.15, ...props) {
  const ref = useRef()
  const { nodes } = useGLTF('/lens-transformed.glb')
  const buffer = useFBO()
  const viewport = useThree((state) => state.viewport)
  const [scene] = useState(() => new THREE.Scene())
  const { speed } = props
  useFrame((state, delta) => {
    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [
        (state.pointer.x * viewport.width) / 2,
        (state.pointer.y * viewport.height) / 2,
        15,
      ],
      damping,
      delta
    )
  })
  return (
    <>
			{/* error here */}
      {createPortal(children, scene)} 
			{/* error here */}
      <mesh scale={[viewport.width, viewport.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} />
      </mesh>
      <mesh
        scale={0.25}
        ref={ref}
        rotation-x={Math.PI / 2}
        geometry={nodes.Cylinder.geometry}
        {...props}
      >
        <MeshTransmissionMaterial />
      </mesh>
      <Scroll>
        <Images />
      </Scroll>
    </>
  )
}
