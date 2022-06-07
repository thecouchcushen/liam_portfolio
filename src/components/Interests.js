import { interests } from '../data'

const Interests = (props) => {

    return (
        <section id="interests">
            <h2>Interests</h2>
            {interests.map((interest, i) => 
                <div key={"Interest"+i}>
                    <p>{interest.interest}</p>
                    <img src={interest.image} alt="not loaded yet"></img>
                    <p>{interest.description}</p>
                </div>
            )}
        </section>
    )
}

export default Interests