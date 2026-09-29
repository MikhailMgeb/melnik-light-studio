import { SegmentedControl } from '@/shared/ui/SegmentedControl'
import { beamAngleOptions, type BeamAngle } from '../lib/beamPresets'
import styles from '../LightPreview.module.css'

interface LightControlsProps {
  cct: number
  cctMin: number
  cctMax: number
  cctStep: number
  onCctChange: (value: number) => void
  angle: BeamAngle
  onAngleChange: (value: BeamAngle) => void
  hint: string
}

export function LightControls({
  cct,
  cctMin,
  cctMax,
  cctStep,
  onCctChange,
  angle,
  onAngleChange,
  hint,
}: LightControlsProps) {
  return (
    <div className={styles.controls}>
      <div className={styles.ctl}>
        <label htmlFor="cct">
          Цветовая температура: <span className={styles.readout}>{cct} K</span>
        </label>
        <input
          id="cct"
          type="range"
          min={cctMin}
          max={cctMax}
          step={cctStep}
          value={cct}
          onChange={(event) => onCctChange(Number(event.target.value))}
        />
      </div>
      <div className={styles.ctl}>
        <span className={styles.name} id="angleLabel">
          Угол луча
        </span>
        <SegmentedControl
          options={beamAngleOptions}
          value={angle}
          onChange={onAngleChange}
          ariaLabelledby="angleLabel"
        />
      </div>
      <p className={styles.hint} aria-live="polite">
        {hint}
      </p>
    </div>
  )
}
