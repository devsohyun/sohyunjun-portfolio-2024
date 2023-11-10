import { Canvas } from '@react-three/fiber'
import { Preload, Scroll, ScrollControls } from '@react-three/drei'
import Lens from './components/Lens'
import './styles/main.scss'
import Images from './components/Images'


export default function App() {
  // const props = useControls({
  //   focus: { value: 5.1, min: 3, max: 7, step: 0.01 },
  //   speed: { value: 30, min: 0.1, max: 100, step: 0.1 },
  //   aperture: { value: 5.6, min: 1, max: 5.6, step: 0.1 },
  //   fov: { value: 50, min: 0, max: 200 },
  //   curl: { value: 0.17, min: 0.01, max: 0.5, step: 0.01 },
  // })

  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 15 }}
        gl={{ antialias: false, alpha: false }}
        dpr={[1, 1.5]}
      >
        <ScrollControls damping={0.5} pages={3} distance={0.5}>
          <Lens>
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
