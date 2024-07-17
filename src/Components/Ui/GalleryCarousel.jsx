import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const GalleryCarousel = ({images}) => {
    return (
        <Carousel >
        <div>
            <img src={images[0]} />
        </div>
        <div>
            <img src={images[1]} />
        </div>
        <div>
            <img src={images[2]} />
        </div>
        <div>
            <img src={images[3]} />
        </div>
        <div>
            <img src={images[4]} />
        </div>
        {/* <div>
            <img src={images[0]} />
        </div> */}
    </Carousel>
    );
};

export default GalleryCarousel;
