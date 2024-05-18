import { Canvas } from "@react-three/fiber"
import Polyhedron from './Polyhedron'
import * as THREE from 'three'

export default function App() {
  const polyhedron = [
    new THREE.BoxGeometry(),
    new THREE.SphereGeometry(),
    new THREE.DodecahedronGeometry(),
  ]
  return (
    <div className="canvas">
      <Canvas camera={{position: [0, 0, 3]}}>
        <Polyhedron position={[-1, -1, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[1, -1, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[-1, 1, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[1, 1, 0]} polyhedron={polyhedron} />
      </Canvas>   
    </div>
  )
}