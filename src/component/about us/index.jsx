import { AboutWrap } from "../../styled"
import config from "../../utils/config"

const About = ()=> {
    return(
        <AboutWrap>
            <div className="wrap">
                <div className="about-header">
                    <h1 className="header" id="about">ABOUT US</h1>
                </div>
                <div className="about-text">
                    <p>{config.about}</p>
                </div>
            </div>
        </AboutWrap>
    )
}
export default About