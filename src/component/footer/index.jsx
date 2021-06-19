import { FooterWrap } from "../../styled";
import photo1 from '../../img/manik-roy-zOa49U1gZHc-unsplash.png'
import photo2 from '../../img/WhatsApp Image 2021-06-01 at 20.48.04.jpeg'
// import photo3 from '../../img/nathon-oski-EW_rqoSdDes-unsplash.png'
const Footer = ()=> {
    return(
        <FooterWrap>
            <div className="wrap">
                <div className="footer-photos">
                    <img src={photo1} alt="photo1" />
                    <img src={photo2} alt="photo2"/>
                    {/* <img src={photo3} alt="photo3" /> */}
                </div>
                <div className="footer-text-area">
                    <div>
                        <div className="header"><h3>OPENING HOURS</h3></div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>monday - friday</td>
                                    <td>8am - 8pm</td>
                                </tr>
                                <tr>
                                    <td>saturday </td>
                                    <td>8am - 8pm</td>
                                </tr>
                                <tr>
                                    <td>sunday </td>
                                    <td>closed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="header" id="contact"><h3>Contact</h3></div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Address</td>
                                    <td>A2, 4 Salt Lake Street, maitama, Abuja</td>
                                </tr>
                                <tr>
                                    <td>Phone </td>
                                    <td>08022634176</td>
                                </tr>
                                <tr>
                                    <td>email </td>
                                    <td>davidtouch1997@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>instagram </td>
                                    <td>david_touch</td>
                                </tr>
                                <tr>
                                    <td>facebook </td>
                                    <td>david_touch</td>
                                </tr>
                                <tr>
                                    <td>twitter </td>
                                    <td>david_touch</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="header" id="#appointment"><h3>LEAVE A MESSAGE</h3></div>
                        <form action="">
                            <label htmlFor="email">
                                <input type="email" placeholder="Email" />
                            </label>
                            <label htmlFor="message">
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                            </label>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </FooterWrap>
    )
}
export default Footer;