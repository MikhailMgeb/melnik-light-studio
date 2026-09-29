import { useMemo, useState, type CSSProperties } from 'react'
import { kelvinToRgb, moodDescription } from '../lib/colorTemperature'
import { beamPresets, type BeamAngle } from '../lib/beamPresets'

const CCT_MIN = 2700
const CCT_MAX = 4000
const CCT_STEP = 100
const CCT_DEFAULT = 3000
const DEFAULT_ANGLE: BeamAngle = 36

interface WallCustomProperties extends CSSProperties {
  '--light'?: string
  '--bw'?: string
  '--bh'?: string
  '--core'?: string
  '--i'?: number
}

export function useLightPreview() {
  const [cct, setCct] = useState(CCT_DEFAULT)
  const [angle, setAngle] = useState<BeamAngle>(DEFAULT_ANGLE)

  const beam = beamPresets[angle]

  const wallStyle = useMemo<WallCustomProperties>(
    () => ({
      '--light': kelvinToRgb(cct).join(','),
      '--bw': beam.bw,
      '--bh': beam.bh,
      '--core': beam.core,
      '--i': beam.i,
    }),
    [cct, beam],
  )

  const hint = `${moodDescription(cct)}; ${beam.hint}.`

  return {
    cct,
    setCct,
    angle,
    setAngle,
    wallStyle,
    hint,
    cctMin: CCT_MIN,
    cctMax: CCT_MAX,
    cctStep: CCT_STEP,
  }
}
