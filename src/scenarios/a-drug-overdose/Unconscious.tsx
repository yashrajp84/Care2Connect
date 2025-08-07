//import CTAButton from '../../components/ui/CTAButton'
//import StepAccordion from '../../components/ui/StepAccordion'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import ActionButton from '../../components/ui/ActionButton'
import { Link } from 'react-router-dom'
import styles from './scenario.module.css'

export default function Unconscious() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>A Drug Overdose</h2>
        <p className={styles.breadcrumb}>Scenario / Suspected overdose</p>
      </div>

      <div className={styles.content}>
        <h3>Unconscious or Not Breathing</h3>
        <p className={styles.italic}>
          “They’ve stopped breathing or are completely unresponsive. Every second counts.”
        </p>
        <ul className={styles.symptoms}>
          <li>Unresponsive & limp</li>
          <li>No chest rise or no breath sounds</li>
        </ul>

        <p className={styles.sub}>Call Triple Zero (000)</p>
        <EmergencyCallButton phone="000" />

        <h4 className={styles.subheading}>Administer Naloxone</h4>
        <p className={styles.hint}>(if you have it)</p>

        <Link to="https://example.com/learn-how" className={styles.secondaryButton}>
          Learn how to
        </Link>
        <Link to="https://example.com/what-is-naloxone" className={styles.secondaryButton}>
          What is Naloxone?
        </Link>
        
        <ActionButton to="/scenarios/a-drug-overdose/breathing">
          Continue to Breathing Check
        </ActionButton>
      </div>
    </div>
  )
}
