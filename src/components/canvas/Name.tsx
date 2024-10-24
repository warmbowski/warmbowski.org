import { FontData, Text3D } from '@react-three/drei'
import fontFiraCode from '../../assets/Fira_Code_SemiBold_Regular.json'
import { Color } from 'three'
import { PALETTE } from '../../constants'

export function Name() {
  return (
    <Text3D font={fontFiraCode as unknown as FontData} size={1.5}>
      Paul Laskowski
      <meshStandardMaterial
        color={PALETTE[5]}
        roughness={0.5}
        metalness={0.5}
      />
    </Text3D>
  )
}

export function Title() {
  return (
    <Text3D font={fontFiraCode as unknown as FontData} size={1}>
      Software Development Engineer
      <meshStandardMaterial
        color={new Color(PALETTE[1])}
        roughness={0.5}
        metalness={0.5}
      />
    </Text3D>
  )
}
