import CTAButton from '../../components/ui/CTAButton'
import StepAccordion from '../../components/ui/StepAccordion'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import { entryConfig } from './config'
import styles from './scenario.module.css'

export default function SuspectedDrugOverdose() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Suspected Drug Overdose</header>
      <StepAccordion steps={entryConfig.steps} />
      <CTAButton to="/scenarios/a-drug-overdose/unconscious" label={entryConfig.ctaLabel} />
      <EmergencyCallButton phone={entryConfig.emergencyNumber} />
    </div>
  )
}
