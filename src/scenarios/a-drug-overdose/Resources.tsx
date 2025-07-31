import { Link } from 'react-router-dom'
import styles from './scenario.module.css'

export default function ScenarioResources() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Overdose Resources</header>
      <p>Call your local poison control center at 1-800-222-1222.</p>
      <Link to="/">Back Home</Link>
    </div>
  )
}
