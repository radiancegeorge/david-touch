import Aos from "aos"
import { useEffect } from "react"
import { HeroSection, Link } from "../../styled"


const Hero = () => {
    useEffect(()=> {
        Aos.init({
            duration: 1000,
        })
    }, [])
    return (
        <HeroSection>
            <div className="overlay"></div>
            <div className="hero">
                <div className="wrap" >
                    <div className="home-text">
                        <p>HOME</p>
                    </div>
                    <div className="jumbotron" 
                    >
                        <p data-aos={`fade-down`}  data-aos-delay="1000">WORLD-CLASS MEN'S HAIRCUTS</p>
                        <h1 data-aos={`fade-left`}> FOR GENTLEMEN ON THE GO</h1>
                        <Link href="/#contact" data-aos="fade-right"
                            data-aos-delay="500"
                        > BOOK AN APPOINTMENT </Link>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero