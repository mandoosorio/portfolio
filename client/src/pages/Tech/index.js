import "./index.css";

import servicenow from "../../assets/servicenow.svg";
import mongo from "../../assets/mongo.svg";
import mysql from "../../assets/mysql.svg";
import adobecc from "../../assets/adobecc.svg";
import apple from "../../assets/apple.svg";
import azure from "../../assets/azure.svg";
import github from "../../assets/github.svg";
import heroku from "../../assets/heroku.svg";

function Tech() {
    return(
        <div id="logodiv">
            <img src={mongo} alt="mongo logo" style={{width:"6%"}}/>
            <img src={mysql} alt="mysql logo" style={{width:"5%"}}/>
            <hr style={{width:"25%", margin: "auto"}}></hr>
            <img src={azure} alt="azure logo" style={{width:"5%"}}/>
            <img src={heroku} alt="heroku logo" style={{width:"5%"}}/>
            <img src={github} alt="github logo" style={{width:"5%"}}/>
            <hr style={{width:"30%", margin: "auto"}}></hr>
            <img src={servicenow} alt="servicenow logo" style={{width:"20%"}}/>
            <hr style={{width:"35%", margin: "auto"}}></hr>
            <img src={adobecc} alt="adobecc logo" style={{width:"5%"}}/>
            <img src={apple} alt="apple logo" style={{width:"5%"}}/>
        </div>
    )
}

export default Tech;