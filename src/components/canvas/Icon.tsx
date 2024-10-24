import { Center } from '@react-three/drei'
import { Color, GroupProps } from '@react-three/fiber'
import { useMemo } from 'react'
import { SimpleIcon } from 'simple-icons'
import { SVGLoader } from 'three/examples/jsm/Addons.js'

const loader = new SVGLoader()

interface IconProps extends GroupProps {
  svgMarkup: SimpleIcon['svg']
  color?: Color
}

export function Icon({ svgMarkup, color, ...groupProps }: IconProps) {
  const svgData = loader.parse(svgMarkup)
  const shapes = useMemo(() => {
    // COMMENT: Majority of examples show use of path.toShape(true|false) but
    // this method has problems with some SVGs based on their winding order.
    // The loader class's method createShapes() is more reliable and should be used instead.
    // https://github.com/mrdoob/three.js/issues/20608#issuecomment-810207660
    return svgData.paths.map((p) => SVGLoader.createShapes(p))
  }, [svgData.paths])

  return (
    <group {...groupProps}>
      {shapes.map((shape, i) => (
        <Center key={i}>
          <mesh rotation={[Math.PI, 0, 0]}>
            <extrudeGeometry
              args={[
                shape,
                {
                  depth: -0.5,
                  bevelEnabled: false,
                  steps: 30,
                },
              ]}
            />
            <meshStandardMaterial
              color={color}
              roughness={0.1}
              metalness={0.7}
            />
          </mesh>
        </Center>
      ))}
    </group>
  )
}
