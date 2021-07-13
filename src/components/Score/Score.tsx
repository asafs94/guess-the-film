import { SVGAttributes } from 'react'
import { formatScore } from '../../utils'
import styles from './Score.module.scss'

type Props = SVGAttributes<SVGElement> & {
  score: number,
  className?: string
}

export default function Score({ score = 0, className, ...rest }: Props) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="160" height="135" viewBox="0 0 160 135" {...rest}>
      <g className={styles.Container}>
        <rect width="160" height="135" rx="24" stroke="none" />
        <rect x="0.5" y="0.5" width="159" height="134" rx="23.5" fill="none" />
      </g>
      <text className={styles.Number} transform="translate(80 108)" fontSize="96" fontFamily="SegoeUI-Semibold, Segoe UI" fontWeight="600" letterSpacing="0.017em">
        <tspan x="-54.113" y="0">
          {formatScore(score)}
        </tspan>
      </text>
    </svg >

  )
}
