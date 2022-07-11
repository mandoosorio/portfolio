import "./index.css";
import gh from "../../assets/icons/github.svg";
import li from "../../assets/icons/linkedin.svg";

function Footer() {
    return(
        <footer>
            <a href="https://github.com/mandoosorio"><img className="iconimg" src={gh} alt="github icon"></img></a>
            <a href="https://www.linkedin.com/in/mandoosorio/"><img className="iconimg" src={li} alt="linkedin icon"></img></a>
        </footer>
    )
}

export default Footer;