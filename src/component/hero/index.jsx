import { HeroSection, Link } from "../../styled"


const Hero = () => {
    return (
        <HeroSection>
            <div className="hero">
                <div className="wrap">
                    <div className="home-text">
                        <p>HOME</p>
                    </div>
                    <div className="jumbotron">
                        <p>WORLD-CLASS MEN'S HAIRCUTS</p>
                        <h1>FOR GENTLEMEN ON THE GO</h1>
                        <Link href="">BOOK AN APPOINTMENT</Link>
                    </div>
                </div>
            </div>
        </HeroSection>
    )
}

export default Hero