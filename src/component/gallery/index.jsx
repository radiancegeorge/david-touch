import { GalleryWrap } from "../../styled";
import overlay from '../../img/WhatsApp Image 2021-06-01 at 20.47.28 (3).jpeg';
import config from "../../utils/config";



const Gallery = () => {
    return(
        <GalleryWrap style={{backgroundImage: `url("${overlay}")`, backgroundSize: "cover"}}>
            <div className="wrap">
                <div className="gallery-header" id="gallery">
                    <h1 className="header"> GALLERY</h1>
                </div>
                <div className="content-wrap">
                    {
                        config.gallery.map((images, idx )=>{
                            return(
                                <div key={idx}>
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