import styles from './EmergencyCallButton.module.css'

interface Props {
  phone: string
}

export default function EmergencyCallButton({ phone }: Props) {
  return (
    <a className={styles.button} href={`tel:${phone}`}>Call {phone}</a>
  )
}
