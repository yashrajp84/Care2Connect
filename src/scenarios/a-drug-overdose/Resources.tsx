import { Link } from 'react-router-dom'
import ActionButton from '../../components/ui/ActionButton'
import styles from './scenario.module.css'

export default function ScenarioResources() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>A Drug Overdose</h2>
        <p className={styles.breadcrumb}>Scenario / Resources</p>
      </div>
      
      <div className={styles.content}>
        <h3>Overdose Resources</h3>
        <p>Call your local poison control center at 1-800-222-1222.</p>
        
        <ul className={styles.symptoms}>
          <li>National Helpline: 1-800-662-HELP (4357)</li>
          <li>SAMHSA's Treatment Locator: findtreatment.samhsa.gov</li>
          <li>Narcan (Naloxone) Information: narcan.com</li>
        </ul>
        
        <ActionButton to="/">
          Return Home
        </ActionButton>
      </div>
    </div>
  )
}
