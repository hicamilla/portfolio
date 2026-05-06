import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
    <p className="hero-intro"> 
      Front-end Developer & Brand Strategist · Düsseldorf, Germany
    </p>
    <h1>
      I build interfaces and understand the people who use them
      </h1>
      <div className="hero-bottom">
        <p className="hero-tagline">
          From brand strategy to front-end development  — I build with both sides in mind.
        </p>
        <a href="#projects" className="hero-cta">View my work →</a>
        <span className="hero-scroll"> – Scroll</span>
      </div>
  </section>
  )
}

export default Hero