import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <p className="about-label">About me</p>
      <div className="about-grid">
        <div className="about-left">
          <h2>
            Hello there.
            <br />
            <em>Let me introduce myself.</em>
          </h2>
        </div>
        <div className="about-right">
          <p>
            I'm <strong>Camilla</strong> — a front-end developer and strategist with a genuine curiosity for how things work and why people use them the way they do.
          </p>
          <p>
            After a decade in brand strategy and CRM, I realized that understanding people — why they click, scroll, and stay — was only half the equation. So I crossed to the other side, and started building the things worth experiencing.
          </p>
          <p>
            I believe strategy and technology are strongest when they speak the same language. I bring both to every project — analytical thinking to the front-end, and human insight to every decision — to create work that doesn't just function, but leaves an impression.
          </p>
          <div className="about-btns">
            <Link to="/about" className="btn-primary">Know more → </Link>
            <a href="/resume.pdf" target="_blank" className="btn-outline" rel="noreferrer">Download Resume ↓</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About