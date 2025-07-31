import { Link } from 'react-router-dom'
import './Home.css' // optional if you want scoped styling

export default function Home() {
  return (
    <main className="home-wrapper">
      <header className="home-header">
        <div className="brand">
          <h1>CareConnect</h1>
          <p className="tagline">Care for yourself. Care for others</p>
        </div>
        <span className="lang-toggle">EN</span>
      </header>

      <section className="home-intro">
        <h2>Tell us what you are witnessing, and we help you connect</h2>
      </section>

      <section className="scenario-grid">
        <Link to="/scenarios/a-drug-overdose" className="scenario-card danger">
          <img src="/icons/emergency-red.svg" alt="Emergency" />
          <p>A Drug Overdose</p>
        </Link>

        <Link to="/scenarios/aggressive-behaviour" className="scenario-card warning">
          <img src="/icons/warning-orange.svg" alt="Warning" />
          <p>Someone Is Acting Aggressively</p>
        </Link>

        <Link to="/scenarios/public-injecting" className="scenario-card warning">
          <img src="/icons/warning-yellow.svg" alt="Warning" />
          <p>Public Injecting</p>
        </Link>

        <Link to="/scenarios/used-syringe" className="scenario-card warning">
          <img src="/icons/warning-yellow.svg" alt="Warning" />
          <p>Found Needle or Equipment</p>
        </Link>

        <Link to="/scenarios/rough-sleeping" className="scenario-card info">
          <img src="/icons/info-blue.svg" alt="Info" />
          <p>Homelessness</p>
        </Link>

        <Link to="/scenarios/unknown" className="scenario-card info">
          <img src="/icons/info-blue.svg" alt="Info" />
          <p>Not sure</p>
        </Link>
      </section>

      <section className="call-blocks">
        <p>If Inside NRCH Premises</p>
        <a href="tel:0394289725" className="call-button green">
          📞 Call 03 9428 9725
        </a>

        <p>Dial 000 in case of emergency</p>
        <a href="tel:000" className="call-button red">
          📞 Call 000
        </a>
      </section>

      <footer className="footer-nav">
        <nav>
          <Link to="/" className="active">Scenarios</Link>
          <Link to="/about">About</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/support">Support</Link>
        </nav>
      </footer>
    </main>
  )
}
