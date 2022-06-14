import email_img from "../email-outline.svg"
import github_img from "../github.svg"
import twitter_img from "../twitter-original.svg"
import "./Contact.css"

const Contact = (props) => {

    return (
        <section id="contact">
            <h3>Contact</h3>
            <a className="contact-link" href="https://github.com/thecouchcushen" target="_blank" rel="noreferrer"><img className="contact-logo" id="github-logo" src={github_img} alt="github logo" /></a>
            <a className="contact-link" href="https://twitter.com/the_flossiest" target="_blank" rel="noreferrer"><img className="contact-logo" src={twitter_img} alt="twitter logo" /></a>

            
            <a  className="contact-link" href="mailto:thecouchcushen@gmail.com">
                <img className="contact-logo" id="email-logo" src={email_img} alt="mail logo" />
                <p>thecouchcushen@gmail.com</p>
            </a>
            
            <iframe
                title="Office Location"
                width="450"
                height="300"
                style={{"border":0}}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyArWAQp38sNWsx1PAUV0GXRLcXeB07zhjE&q=30+Rockefeller+Plaza, New York+ New York"
                >
            </iframe>
            {/*
            <form>
            

            <label htmlFor="personName">Name</label>
            <input name="personName" type="text"></input>

            <label htmlFor="personEmail">Email</label>
            <input name="personEmail" type="email"></input>
            
            <label htmlFor="message">Message</label>
            <textarea name="message" type="text"></textarea>
            
            <button>Submit</button>
            </form>
    */}
        </section>
    )
}

export default Contact