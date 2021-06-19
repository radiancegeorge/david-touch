import { AboutWrap } from "../../styled"
import config from "../../utils/config"

const About = ()=> {
    return(
        <AboutWrap>
            <img src="/img/WhatsApp Image 2021-06-01 at 20.47.29.jpeg" alt="" className="overlay" />
            <div className="about-header">
                    <h1 className="header" id="about">ABOUT US</h1>
                </div>
            <div className="wrap">
                <div className="about-text">
                    <p>{config.about}</p>
                </div>
            </div>
            
        </AboutWrap>
    )
}
export default About