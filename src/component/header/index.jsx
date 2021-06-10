import { HeaderWrap, Link } from "../../styled";
import config from '../../utils/config';
import {Fragment} from 'react';
import firstSectionBackground from '../../img/WhatsApp Image 2021-06-01 at 20.47.30 (1).jpeg'; 

const Header = ( ) => {
    return(
        <div className="header-section">
            <HeaderWrap>
            <img src={firstSectionBackground} alt="img" width="100%" className="blur-bg"/>
                <nav>
                    <div className="logo"><img src="/img/DT LOGO (1).png" alt="" /></div>
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