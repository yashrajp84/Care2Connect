import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Care2Connect</h1>
      <nav>
        <ul>
          <li>
            <Link to="/scenarios/a-drug-overdose">Suspected Drug Overdose</Link>
          </li>
          <li>
            <Link to="/resources">General Resources</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
