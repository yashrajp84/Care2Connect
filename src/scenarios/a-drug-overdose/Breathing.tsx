import CTAButton from '../../components/ui/CTAButton'
import StepAccordion from '../../components/ui/StepAccordion'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import { breathingConfig } from './config'
import styles from './scenario.module.css'

import { Link } from 'react-router-dom'

export default function Breathing() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>A Drug Overdose</h2>
        <p className={styles.breadcrumb}>Scenario / Suspected overdose</p>
      </div>

      <div className={styles.content}>
        <h3>Breathing</h3>
        <h4 className={styles.subheading}>High-Risk Signs</h4>
        <ul className={styles.symptoms}>
          <li>Pin-point pupils, clammy/pale skin</li>
          <li>Slow, erratic, or shallow breathing</li>
          <li>Blue lips/fingernails</li>
          <li>Choking/vomit</li>
          <li>Nausea or vomiting only</li>
          <li>Dizziness, mild cramps</li>
          <li>Uncoordinated but awake</li>
          <li>
            <Link to="/scenarios/a-drug-overdose/resources" className={styles.moreLink}>
              more
            </Link>
          </li>
        </ul>

        <p className={styles.note}>If more than 2 High-Risk Signs then call professional help</p>
        <EmergencyCallButton phone="000" />

        <p className={styles.note}>If less than 2 High-Risk Signs then use Naloxone</p>
        <Link to="https://example.com/what-is-naloxone" className={styles.secondaryButton}>
          What is Naloxone?
        </Link>
      </div>
    </div>
  )
}
