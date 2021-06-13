import { HeaderWrap, Link } from "../../styled";
import config from '../../utils/config';
import {Fragment, useState} from 'react';
import firstSectionBackground from '../../img/WhatsApp Image 2021-06-01 at 20.47.30 (1).jpeg'; 
import { BiMenu } from 'react-icons/all'

const Header = ( ) => {
    const [hiddenLink, setHiddenLink] = useState();
    const toggleLinkDisplay = () => {
        setHiddenLink(!hiddenLink)
    }
    return(
        <div className="header-section">
            <HeaderWrap linkDisplay={hiddenLink}>
            <img src={firstSectionBackground} alt="img" width="100%" className="blur-bg"/>
                <nav>
                    <div className="logo">
                        <img src="/img/DT LOGO (1) copy.png" alt="" /> 
                        <div className="hamburger" onClick={toggleLinkDisplay}><BiMenu color="white" size="35px" /></div>
                    </div>
                    {
                        config.navItems.map( (item, idx) => {
                            const {name, link} = item;
                            return(
                                <Fragment key={idx}>
                                    <Link nav={true} href={link}> {name} </Link>
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