import React, { useRef } from 'react'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const Scene = () => {
    let tex = useTexture("./img.png")
    let cly = useRef(null)
    useFrame((state, delta)=>{
        cly.current.rotation.y += delta * 0.02;
    })
  return (
    <group rotation={[0, 1.4, 0.4]}>
        <mesh ref={cly}>
            <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
    </group>
  )
}

export default Scene