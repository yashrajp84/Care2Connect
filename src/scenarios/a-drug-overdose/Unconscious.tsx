import CTAButton from '../../components/ui/CTAButton'
import StepAccordion from '../../components/ui/StepAccordion'
import EmergencyCallButton from '../../components/ui/EmergencyCallButton'
import { unconsciousConfig } from './config'
import styles from './scenario.module.css'

export default function Unconscious() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Unconscious</header>
      <StepAccordion steps={unconsciousConfig.steps} />
      <CTAButton to="/scenarios/a-drug-overdose/breathing" label={unconsciousConfig.ctaLabel} />
      <EmergencyCallButton phone={unconsciousConfig.emergencyNumber} />
    </div>
  )
}
