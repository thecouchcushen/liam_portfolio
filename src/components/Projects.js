import { projects } from '../data'
import githubLogo from '../github.svg'
import webLogo from '../web.svg'
import './Projects.css'

const Projects = (props) => {

    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className='projects-wrapper'>
            {projects.map((project, i) => 
            <div className='project-wrapper' key={"Project"+i}>
                <p><strong>{project.title}</strong></p>
                <a href={project.link} target="_blank" rel="noreferrer"><img src={webLogo} alt="cant find web icon"></img>Site</a>
                <a href={project.repo} target="_blank" rel="noreferrer"><img src={githubLogo} alt="cant find github icon"></img>Repo</a>
                <img src={project.image} alt="not loaded yet"></img>
                <p>{project.subtitle}</p>
                <p>{project.description}</p>
            </div>
            )}
            </div>
        </section>
    )
}

export default Projects