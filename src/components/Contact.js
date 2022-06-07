const Contact = (props) => {

    return (
        <section id="contact">
            <form>
            <h2>Contact Me</h2>

            <label htmlFor="personName">Name</label>
            <input name="personName" type="text"></input>

            <label htmlFor="personEmail">Email</label>
            <input name="personEmail" type="email"></input>
            
            <label htmlFor="message">Message</label>
            <textarea name="message" type="text"></textarea>
            
            <button>Submit</button>
            </form>
        </section>
    )
}

export default Contact