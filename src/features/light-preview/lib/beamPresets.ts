export type BeamAngle = 24 | 36 | 60

export interface BeamPreset {
  bw: string
  bh: string
  core: string
  i: number
  hint: string
}

export const beamPresets: Record<BeamAngle, BeamPreset> = {
  24: {
    bw: '34%',
    bh: '108%',
    core: '46%',
    i: 0.95,
    hint: 'узкий луч выделяет объект и оставляет стену в тени',
  },
  36: {
    bw: '48%',
    bh: '90%',
    core: '38%',
    i: 0.8,
    hint: 'средний луч: акцент на объекте и мягкий переход на стену',
  },
  60: {
    bw: '82%',
    bh: '72%',
    core: '30%',
    i: 0.6,
    hint: 'широкий луч заливает стену ровным светом, тени почти нет',
  },
}

export const beamAngleOptions: { value: BeamAngle; label: string }[] = [
  { value: 24, label: '24°' },
  { value: 36, label: '36°' },
  { value: 60, label: '60°' },
]
