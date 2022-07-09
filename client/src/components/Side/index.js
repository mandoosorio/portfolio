import "./side.css";
import "./nav.css";

function Side() {
    return (
        <div>
            <div className="nav">
            <input type="checkbox" id="nav-check"></input>
            <div className="nav-header">
                <div className="nav-title">
                
                </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>
            
            <div className="nav-links">
                <a href="//github.io/jo_geek" target="blank" rel="noreferrer">github</a>
                <a href="http://stackoverflow.com/users/4084003/" target="blank" rel="noreferrer">stackoverflow</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="blank" rel="noreferrer">linkedin</a>
                <a href="https://codepen.io/jo_Geek/" target="blank" rel="noreferrer">codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="blank" rel="noreferrer">jsfiddle</a>
            </div>
            </div>
            <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
            <label for="openSidebarMenu" className="sidebarIconToggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarMenu">
                <ul className="sidebarMenuInner">
                <li>Armando Osorio<span>Web Developer</span></li>
                <li><a href="https://vanila.io" target="blank" rel="noreferrer">company</a></li>
                <li><a href="https://instagram.com/plavookac" target="blank" rel="noreferrer">instagram</a></li>
                <li><a href="https://twitter.com/plavookac" target="blank" rel="noreferrer">twitter</a></li>
                <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="blank" rel="noreferrer">youtube</a></li>
                <li><a href="https://www.linkedin.com/in/plavookac/" target="blank" rel="noreferrer">linkedin</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Side;