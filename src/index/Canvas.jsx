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
      <Canvas camera={{position: [0, 0, 0], left: -2, right: 2, top: 2, bottom: -2, zoom: -1, near: -10, far: 10}} orthographic>
        <Polyhedron position={[-0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, -0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[-0.75, 0.75, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[0.75, 0.75, 0]} polyhedron={polyhedron} />
      </Canvas>   
    </div>
  )
}