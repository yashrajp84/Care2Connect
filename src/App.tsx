import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'

import Home from './pages/Home'
// import About from './pages/About'
// import Learn from './pages/Learn'
// import Support from './pages/Support' // Commented out as module not found
import Resources from './pages/Resources'
import SuspectedDrugOverdose from './scenarios/a-drug-overdose/Suspected_drug_overdose'
import Unconscious from './scenarios/a-drug-overdose/Unconscious'
import Breathing from './scenarios/a-drug-overdose/Breathing'
import ScenarioResources from './scenarios/a-drug-overdose/Resources'
import './App.css'
import './assets/tokens.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/scenarios/a-drug-overdose" element={<SuspectedDrugOverdose />} />
        <Route path="/scenarios/a-drug-overdose/unconscious" element={<Unconscious />} />
        <Route path="/scenarios/a-drug-overdose/breathing" element={<Breathing />} />
        <Route path="/scenarios/a-drug-overdose/resources" element={<ScenarioResources />} />
      </Routes>
    </BrowserRouter>
  )
}
