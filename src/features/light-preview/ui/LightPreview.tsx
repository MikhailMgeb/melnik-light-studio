import { useLightPreview } from '../model/useLightPreview'
import { LightWall } from './LightWall'
import { LightControls } from './LightControls'
import styles from '../LightPreview.module.css'

export function LightPreview() {
  const { cct, setCct, angle, setAngle, wallStyle, hint, cctMin, cctMax, cctStep } = useLightPreview()

  return (
    <div className={styles.stage}>
      <LightWall wallStyle={wallStyle} />
      <LightControls
        cct={cct}
        cctMin={cctMin}
        cctMax={cctMax}
        cctStep={cctStep}
        onCctChange={setCct}
        angle={angle}
        onAngleChange={setAngle}
        hint={hint}
      />
    </div>
  )
}
