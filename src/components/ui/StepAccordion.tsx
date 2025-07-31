import { useState } from 'react'
import type { Step } from '../../types/scenario'
import styles from './StepAccordion.module.css'

interface Props {
  steps: Step[]
}

export default function StepAccordion({ steps }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={styles.accordion}>
      {steps.map((step, index) => (
        <div key={index} className={styles.item}>
          <button
            className={styles.title}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {step.title}
          </button>
          {openIndex === index && <p className={styles.content}>{step.details}</p>}
        </div>
      ))}
    </div>
  )
}
