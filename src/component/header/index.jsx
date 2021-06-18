import { HeaderWrap, Link } from "../../styled";
import config from '../../utils/config';
import {Fragment, useEffect, useState} from 'react';
import firstSectionBackground from '../../img/WhatsApp Image 2021-06-01 at 20.47.30 (1).jpeg'; 
import { BiMenu } from 'react-icons/all'
import Aos from "aos";

const Header = ( ) => {
    useEffect(()=> {
        Aos.init({
            duration: 1000,
        })
    }, [])
    const [hiddenLink, setHiddenLink] = useState();
    const toggleLinkDisplay = () => {
        setHiddenLink(!hiddenLink)
    }
    return(
        <div className="header-section">
            <HeaderWrap linkDisplay={hiddenLink}>
                <div className="overlay"></div>
            <img src={firstSectionBackground} alt="img" width="100%" className="blur-bg"/>
                <nav>
                    <div className="logo">
                        <img src="/img/DT LOGO (1) copy.png" alt="" /> 
                        <div className="hamburger" onClick={toggleLinkDisplay}><BiMenu color="white" size="35px" /></div>
                    </div>
                    {
                        config.navItems.map( (item, idx) => {
                            const {name, link} = item;
                            const isEven = idx % 2 === 0 ? true : false;
                            return(
                                <Fragment key={idx}>
                                    <Link nav={true} href={link} data-aos={`fade-${isEven ? "up" : "down"}`}> {name} </Link>
                                </Fragment>
                            )
                        })
                    }
                </nav>
            </HeaderWrap>
        </div>
    )
};

export default Header;