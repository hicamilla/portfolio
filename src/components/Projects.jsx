import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      band: '#DDD0E8',
      title: "Voice Translator",
      description: "A mobile-friendly voice translation web app that lets you speak or type in one language and instantly get a translation in another.",
      tech: ["JavaScript", "Translation API", "CSS"],
      live: "https://yourtranslator.netlify.app/",
      github: "https://github.com/hicamilla/voice-translator"
    },
    {
      id: 2,
      band: '#E8D4C8',
      title: "Where Is My Car",
      description: "An app to help you remember where you parked your car — save your location in one tap.",
      tech: ["JavaScript", "Geolocation API", "CSS"],
      live: "https://parkedhere.netlify.app/",
      github: "https://github.com/hicamilla/where-is-my-car"
    },
    {
      id: 3,
      band: '#C8D4C0',
      title: "The Cut Room",
      description: "A curated collection of binge-worthy documentaries with witty descriptions and poster previews. Built to practice responsive design and clean UI layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://thecutroom.netlify.app",
      github: "https://github.com/hicamilla/landing-page-hobbie"
    },
    {
      id: 4,
      band: '#D4C4A0',
      title: "The Time Tracker",
      description: "A world clock app to track time across multiple time zones at once.",
      tech: ["JavaScript", "CSS", "HTML"],
      live: "https://ticktoclock.netlify.app/",
      github: "https://github.com/hicamilla/time-tracker"
    }
  ]

  return (
    <section className="projects" id="projects">
      <p className="projects-label">Projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              className="project-band"
              style={{ backgroundColor: project.band }}
            ></div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tech.map((item) => (
                  <li key={item} className="project-tag">{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer" className="project-link">Live site ↗</a>
                <span className="project-link-divider">·</span>
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects