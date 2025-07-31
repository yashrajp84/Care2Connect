import CTAButton from '../../components/ui/CTAButton'
import StepAccordion from '../../components/ui/StepAccordion'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import { breathingConfig } from './config'
import styles from './scenario.module.css'

export default function Breathing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Breathing</header>
      <StepAccordion steps={breathingConfig.steps} />
      <CTAButton to="/scenarios/a-drug-overdose/resources" label={breathingConfig.ctaLabel} />
      <EmergencyCallButton phone={breathingConfig.emergencyNumber} />
    </div>
  )
}
