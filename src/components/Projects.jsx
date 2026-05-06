function Projects() {
  const projects = [
    {
      id: 1,
      color: "#E6F1FB",
      title: "Voice Translator",
      description: "A mobile-friendly voice translation web app that lets you speak or type in one language and instantly get a translation in another.",
      tech: ["JavaScript", "Translation API", "CSS"],
      live: "https://yourtranslator.netlify.app/",
      github: "https://github.com/hicamilla/voice-translator"
    },
    {
      id: 2,
      color: "#EAF3DE",
      title: "Where Is My Car",
      description: "A app to help you remember where you parked your car.",
      tech: ["JavaScript", "Geolocation API", "CSS"],
      live: "https://parkedhere.netlify.app/",
      github: "https://github.com/hicamilla/where-is-my-car"
    },
    {
      id: 3,
      color: "#FAEEDA",
      title: "The Cut Room",
      description: "A curated collection of binge-worthy documentaries with witty descriptions and poster previews. Built to practice responsive design, semantic HTML, and clean UI layout.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://thecutroom.netlify.app",
      github: "https://github.com/hicamilla/landing-page-hobbie"
    },
    {
      id: 4,
      color: "#EEEDFE",
      title: "The Time Tracker",
      description: "A world clock app to track time across multiple time zones at once.",
      tech: ["JavaScript", "CSS", "HTML"],
      live: "https://ticktoclock.netlify.app/",
      github: "https://github.com/hicamilla/time-tracker"
    }
  ]

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <div style={{ backgroundColor: project.color }}></div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={project.live} target="_blank" rel="noreferrer">
              Live site
            </a>
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects