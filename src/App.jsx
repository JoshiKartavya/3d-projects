import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './Scene'
import { OrbitControls } from '@react-three/drei'
import './style.css'
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <>
      <div className="home absolute h-full w-full">
        <Canvas 
          camera={{ fov: 30}} 
          className="absolute top-0 left-0 z-10" // Ensure Canvas is beneath the text
        >
          <OrbitControls />
          <ambientLight />
          <Scene />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={3.0}
              luminanceThreshold={0}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
        <div className="absolute top-12 left-8 w-full h-full z-40 bg-transparent flex flex-row justify-between ite text-[#e5e5e5]">
          <h1 className="font-bold text-4xl uppercase flex text-center">my recent projects:</h1>
        </div>
      </div>
    </>
  )
}

export default App
