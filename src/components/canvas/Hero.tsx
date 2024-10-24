import {
  siCss3,
  siDocker,
  siGithub,
  siGitlab,
  siGraphql,
  siHtml5,
  siJavascript,
  siKubernetes,
  siMeteor,
  siMongodb,
  siMui,
  siNodedotjs,
  siNpm,
  siPostgresql,
  siReact,
  siThreedotjs,
  siTypescript,
  siVite,
} from 'simple-icons'
import { Center, Environment, Lightformer } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { TetherObject } from './TetherObject'
import { Name, Title } from './Name'
import { IconCarousel } from './Carousel'

export function Hero() {
  return (
    <Canvas>
      <orthographicCamera position={[0, 0, 15]} />
      <ambientLight intensity={Math.PI} />
      <Physics
        debug={false}
        interpolate
        gravity={[0, -40, 0]}
        timeStep={1 / 60}
      >
        <group position={[0, 3, -5]}>
          <Center>
            <Name />
          </Center>
        </group>
        <TetherObject position={[0, 3.7, -2]}>
          <Title />
        </TetherObject>
        <IconCarousel
          position={[0, -1.2, -5]}
          radius={11}
          scale={0.6}
          icons={[
            siJavascript,
            siTypescript,
            siReact,
            siMui,
            siCss3,
            siHtml5,
            siThreedotjs,
            siGraphql,
            siVite,
            siNodedotjs,
            siNpm,
            siMeteor,
            siPostgresql,
            siMongodb,
            siGithub,
            siGitlab,
            siDocker,
            siKubernetes,
          ]}
        />
      </Physics>
      <Environment background blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  )
}
