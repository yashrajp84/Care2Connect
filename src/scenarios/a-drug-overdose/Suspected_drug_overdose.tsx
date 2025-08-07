import { Link } from 'react-router-dom'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import ActionButton from '../../components/ui/ActionButton'
import styles from './scenario.module.css'

export default function SuspectedDrugOverdose() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>A Drug Overdose</h2>
        <p className={styles.breadcrumb}>Scenario / Suspected overdose</p>
      </div>

      <div className={styles.content}>
        <h3>Suspected Opioid Overdose</h3>
        <p>
          Witnessing an overdose can be frightening. You’re doing the right thing by taking action.
          Follow these prompts and tap the big button when you’re ready.
        </p>

        <div className={styles.options}>
          <Link to="/scenarios/a-drug-overdose/unconscious" className={styles.card}>
            <img src="/icons/emergency-red.svg" alt="Unconscious icon" />
            <span>Unconscious</span>
          </Link>

          <Link to="/scenarios/a-drug-overdose/breathing" className={styles.card}>
            <img src="/icons/emergency-red.svg" alt="Breathing icon" />
            <span>Breathing</span>
          </Link>
        </div>

        <p className={styles.unsure}>
          <strong>Unsure?</strong> <br />
          <span className={styles.note}>
            Note: The person needs immediate professional assistance
          </span>
        </p>

        <EmergencyCallButton phone="000" />
        
        <ActionButton to="/scenarios/a-drug-overdose/resources">
          View All Resources
        </ActionButton>
      </div>
    </div>
  )
}
