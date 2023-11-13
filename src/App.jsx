import { Canvas } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'
import Lens from './components/Lens'
import './styles/main.scss'
import Images from './components/Images'
import { useControls } from 'leva'

export default function App() {
  const props = useControls({
    scale: { value: 0.25, min: 0.1, max: 1, step: 0.01 },
  })

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1.5]}
      >
        <ScrollControls damping={0.5} pages={3} distance={0.5}>
          <Lens scale={props.scale}>
            <Scroll>
              <Images />
            </Scroll>
            <Preload />
          </Lens>
        </ScrollControls>
      </Canvas>
    </>
  )
}
