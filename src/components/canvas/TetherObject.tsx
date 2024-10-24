import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { useFrame, GroupProps } from '@react-three/fiber'
import {
  BallCollider,
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  RigidBodyProps,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier'
import { Center } from '@react-three/drei'

interface RigidBodyExtended extends RapierRigidBody {
  lerped?: THREE.Vector3
}

interface TetherObjectProps extends GroupProps {
  maxSpeed?: number
  minSpeed?: number
  springLength?: number
}

export function TetherObject({
  maxSpeed = 50,
  minSpeed = 10,
  springLength = 1,
  children,
  ...groupProps
}: TetherObjectProps) {
  const fixed = useRef<RapierRigidBody>(null!),
    j1 = useRef<RigidBodyExtended>(null!),
    j2 = useRef<RigidBodyExtended>(null!),
    j3 = useRef<RapierRigidBody>(null!),
    card = useRef<RapierRigidBody>(null!)
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3()
  const segmentProps: RigidBodyProps = {
    type: 'dynamic',
    canSleep: true,
    colliders: false,
    angularDamping: 2,
    linearDamping: 2,
  }

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  )
  const [dragged, drag] = useState<THREE.Vector3>()
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], springLength / 3])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], springLength / 3])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], springLength / 3])
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame(({ camera, pointer }, delta) => {
    if (dragged) {
      vec.set(pointer.x, pointer.y, 0.5).unproject(camera)
      dir.copy(vec).sub(camera.position).normalize()
      vec.add(dir.multiplyScalar(camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      ;[j1, j2].forEach((ref) => {
        if (ref.current) {
          if (!ref.current.lerped)
            ref.current.lerped = new THREE.Vector3().copy(
              ref.current.translation()
            )
          const clampedDistance = Math.max(
            0.1,
            Math.min(
              1,
              ref.current.lerped.distanceTo(ref.current.translation())
            )
          )
          ref.current.lerped.lerp(
            ref.current.translation(),
            delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
          )
        }
      })

      // Calculate catmul curve
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped || new THREE.Vector3())
      curve.points[2].copy(j1.current.lerped || new THREE.Vector3())
      curve.points[3].copy(fixed.current.translation())
      // Tilt it back towards the screen
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel(
        { x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z },
        true
      )
    }
  })

  curve.curveType = 'chordal'

  return (
    <group {...groupProps}>
      <RigidBody ref={fixed} {...segmentProps} type="fixed" />
      <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody
        position={[2, 0, 0]}
        ref={card}
        {...segmentProps}
        type={dragged ? 'kinematicPosition' : 'dynamic'}
      >
        <CuboidCollider args={[3, 0.5, 0.1]} />
        <group
          scale={0.5}
          position={[0, 0, 0]}
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onPointerUp={(e) => {
            const ele = e.target as Element | null
            ele?.releasePointerCapture(e.pointerId)
            drag(undefined)
          }}
          onPointerDown={(e) => {
            const ele = e.target as Element | null
            ele?.setPointerCapture(e.pointerId)
            drag(
              new THREE.Vector3()
                .copy(e.point)
                .sub(vec.copy(card.current.translation()))
            )
          }}
        >
          <Center>{children}</Center>
        </group>
      </RigidBody>
    </group>
  )
}
