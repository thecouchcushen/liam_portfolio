import { books, interests } from '../data'
import "./Interests.css"


const Interests = (props) => {

    return (
        <section id="interests">
            <h2>Interests</h2>
            <h3>Hobbies</h3>
            <div className='hobbies-wrapper'>
            {interests.map((interest, i) => 
                <div className="hobby-wrapper" key={"Hobby"+i}>
                    <p><strong>{interest.interest}</strong></p>
                    <img src={process.env.PUBLIC_URL + interest.image} alt="not loaded yet" width="300px"></img>
                    <p>{interest.description}</p>
                </div>
            )}
            </div>
            <h3>Books I've read recently</h3>
            <div className='books-wrapper'>
            {books.map((book, i) => 
                <div className="book-wrapper" key={"Book"+i}>
                    <p><strong>{book.title}</strong></p>
                    <p>{book.author}</p>
                    <img src={process.env.PUBLIC_URL+book.image} alt="not loaded yet"></img>
                </div>
            )}
            </div>
        </section>
    )
}

export default Interests