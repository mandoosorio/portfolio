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
                <a href="//github.io/jo_geek" target="blank" rel="noreferrer">Github</a>
                <a href="http://stackoverflow.com/users/4084003/" target="blank" rel="noreferrer">Stackoverflow</a>
                <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="blank" rel="noreferrer">LinkedIn</a>
                <a href="https://codepen.io/jo_Geek/" target="blank" rel="noreferrer">Codepen</a>
                <a href="https://jsfiddle.net/user/jo_Geek/" target="blank" rel="noreferrer">JsFiddle</a>
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
                <li><a href="https://vanila.io" target="blank" rel="noreferrer">Company</a></li>
                <li><a href="https://instagram.com/plavookac" target="blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com/plavookac" target="blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="blank" rel="noreferrer">YouTube</a></li>
                <li><a href="https://www.linkedin.com/in/plavookac/" target="blank" rel="noreferrer">Linkedin</a></li>
                </ul>
            </div>
            {/* <div id='center' className="main center">
                <div className="mainInner">
                <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                </div>
                <div className="mainInner">
                <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                </div>
                <div className="mainInner">
                <div>PURE CSS SIDEBAR TOGGLE MENU</div>
                </div>
            </div> */}
        </div>
    )
}

export default Side;