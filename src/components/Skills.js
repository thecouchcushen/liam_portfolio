import { skills } from "../data"

const Skills = (props) => {

    return (
        <section id="skills">
            <h2>Skills:</h2>
            <div className="skills-wrapper">
            {skills.map((skill, i) => 
            <div key={"skill"+i}>
                <img src={process.env.PUBLIC_URL + skill.image} alt="unable to load" width="50px"></img>
                <p>{skill.skill}: {skill.confidence} confidence</p>
            </div>
            )
            
            }
            </div>
        </section>
    )
}

export default Skills