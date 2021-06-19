import { GalleryWrap } from "../../styled";
import overlay from '../../img/WhatsApp Image 2021-06-01 at 20.47.28 (3).jpeg';
import config from "../../utils/config";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Gallery = () => {
    useEffect(()=> {
        AOS.init({
            duration: 500,
        });
    }, [])
    return(
        <GalleryWrap style={{backgroundImage: `url("${overlay}")`, backgroundSize: "cover"}}>
            <div className="overlay"></div>
            <div className="wrap">
                <div className="gallery-header" id="gallery">
                    <h1 className="header"> GALLERY</h1>
                </div>
                <div className="content-wrap">
                    {
                        config.gallery.map((images, idx )=>{
                            const isEven = idx % 2 === 0 ? true : false ;
                            const delay = idx * 500;
                            return(
                                <div key={idx} data-aos={`fade-${isEven ? "down" : "up"}`}
                                data-aos-delay={delay}
                                >
                                    <img src={`/img/${images}`} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </GalleryWrap>
    )
}
export default Gallery