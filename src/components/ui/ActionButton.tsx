import { Link } from 'react-router-dom'
import styles from '../../scenarios/a-drug-overdose/scenario.module.css'

interface Props {
  to: string
  children: React.ReactNode
  onClick?: () => void
}

export default function ActionButton({ to, children, onClick }: Props) {
  return (
    <Link className={styles.actionButton} to={to} onClick={onClick}>
      {children}
    </Link>
  )
}