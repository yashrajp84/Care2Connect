import type { ScenarioConfig } from '../../types/scenario'

export const entryConfig: ScenarioConfig = {
  steps: [
    { title: 'Check responsiveness', details: 'Gently shake and shout.' },
    { title: 'Call emergency services', details: 'If no response, call 911.' },
  ],
  ctaLabel: 'Person is Unconscious',
  emergencyNumber: '911',
}

export const unconsciousConfig: ScenarioConfig = {
  steps: [
    { title: 'Perform rescue breathing', details: 'Give one breath every 5 seconds.' },
    { title: 'Administer naloxone', details: 'Use nasal spray if available.' },
  ],
  ctaLabel: 'Person is Breathing',
  emergencyNumber: '911',
}

export const breathingConfig: ScenarioConfig = {
  steps: [
    { title: 'Monitor until help arrives', details: 'Stay with the person.' },
  ],
  ctaLabel: 'View Resources',
  emergencyNumber: '911',
}
