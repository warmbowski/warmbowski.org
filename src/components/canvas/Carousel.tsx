import { useMemo, useRef } from 'react'
import { SimpleIcon } from 'simple-icons'
import { Icon } from './Icon'
import { Color, Group } from 'three'
import { GroupProps /* useFrame */ } from '@react-three/fiber'
// import { lerp } from 'three/src/math/MathUtils.js'
import { useSpring, animated } from '@react-spring/three'

const ROTATION_DELAY = 800
const ROTATION_OFFSET = -Math.PI / 2
const ROTATION_START = { rotateY: ROTATION_OFFSET, delay: 0 }
const ROTATION_END = {
  rotateY: Math.PI * 2 + ROTATION_OFFSET,
  delay: ROTATION_DELAY,
}

interface IconCarouselProps extends GroupProps {
  icons: SimpleIcon[]
  radius?: number
}

export function IconCarousel({
  icons,
  radius = 5,
  ...groupProps
}: IconCarouselProps) {
  const groupRef = useRef<Group>(null!)

  const rotationSteps = useMemo(() => {
    const steps = icons
      .map((_, index) => ({
        rotateY: (index / icons.length) * Math.PI * 2 + ROTATION_OFFSET,
        delay: ROTATION_DELAY,
      }))
      .filter((_, index) => index > 0)
    return [...steps, ROTATION_END]
  }, [icons])

  const iconMeshes = useMemo(() => {
    return icons.map((icon, index) => {
      const angle = (index / icons.length) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const z = Math.sin(angle) * radius

      return (
        <Icon
          key={icon.slug}
          svgMarkup={icon.svg}
          color={new Color(`#${icon.hex}`)}
          scale={0.1}
          position={[x, 0, z]}
          rotation={[0, Math.PI / 2 - angle, 0]}
        />
      )
    })
  }, [icons, radius])

  const { rotateY } = useSpring({
    from: ROTATION_START,
    to: rotationSteps,
    loop: true,
    immediate: true,
    config: {
      mass: 5,
      tension: 350,
      friction: 40,
    },
  })

  // useFrame((state) => {
  //   const x = state.pointer.x
  //   const y = -state.pointer.y

  //   groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, x / 10, 0.1)
  //   groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, y / 10, 0.1)
  // })

  return (
    <group ref={groupRef} {...groupProps}>
      <animated.group rotation-y={rotateY}>{iconMeshes}</animated.group>
    </group>
  )
}
