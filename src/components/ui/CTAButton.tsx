import { Link } from 'react-router-dom'
import styles from './CTAButton.module.css'

interface Props {
  to: string
  label: string
}

export default function CTAButton({ to, label }: Props) {
  return (
    <Link className={styles.button} to={to}>
      {label}
    </Link>
  )
}
