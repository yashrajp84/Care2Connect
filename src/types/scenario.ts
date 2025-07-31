export interface Step {
  title: string;
  details: string;
}

export interface ScenarioConfig {
  steps: Step[];
  ctaLabel: string;
  emergencyNumber: string;
}
