import './Navbar.css'

const Navbar = (props) => {

    return (
        <header>
            <nav className="nav-wrapper">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#interests">Interests</a>
                <a href="#contact">Contact</a>
            </nav>
            <h1>Liam Cushen</h1>
        </header>
    )
}

export default Navbar