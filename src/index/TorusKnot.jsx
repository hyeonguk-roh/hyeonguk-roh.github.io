
import { useRef, useEffect, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function TorusKnot(props) {
  const ref = useRef()
  const [hovered, setHover] = useState(false)
  const [count, setCount] = useState(0)
  const geometry = useMemo(() => [new THREE.BoxGeometry(), new THREE.TorusKnotGeometry], [])

  useFrame((_, delta) => {
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  })

  return(
    <mesh 
      {...props} 
      ref={ref}
      scale={hovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerOver={(e) => setHover(!hovered)}
      onPointerLeave={(e) => setHover(!hovered)}
      onPointerDown={(e) => setCount((count + 1) % 2)}
      geometry={geometry[count]}
    >
      <torusKnotGeometry />
      <meshBasicMaterial color={hovered ? 0xff0000 : 0x00ff00} wireframe />
    </mesh>
  )
}