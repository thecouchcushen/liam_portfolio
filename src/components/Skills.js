import { skills } from "../data"
import './Skills.css'

const Skills = (props) => {

    return (
        <section id="skills">
            <h2>Skills:</h2>
            <div className="skills-wrapper">
            {skills.map((skill, i) => 
            <div className="skill-wrapper" key={"skill"+i}>
                <img src={process.env.PUBLIC_URL + skill.image} alt="unable to load" width="50px"></img>
                <p>{skill.skill}</p>
            </div>
            )
            
            }
            </div>
        </section>
    )
}

export default Skills