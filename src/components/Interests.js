import { books, interests } from '../data'


const Interests = (props) => {

    return (
        <section id="interests">
            <h2>Interests</h2>
            <h3>Hobbies</h3>
            {interests.map((interest, i) => 
                <div key={"Hobby"+i}>
                    <p>{interest.interest}</p>
                    <img src={process.env.PUBLIC_URL + interest.image} alt="not loaded yet" width="300px"></img>
                    <p>{interest.description}</p>
                </div>
            )}
            <h3>Books I've read recently</h3>
            {books.map((book, i) => 
                <div key={"Book"+i}>
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    {console.log(process.env.PUBLIC_URL+book.image)}
                    <img src={process.env.PUBLIC_URL+book.image} alt="not loaded yet"></img>
                </div>
            )}
        </section>
    )
}

export default Interests