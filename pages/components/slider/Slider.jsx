import Slider from "react-slick";
import Slide from './Slide';
import imagem from '/public/assets/images/ph.png'
export default function SliderHome() {
    var settings = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <Slide src={imagem}/>
            </div>
            <div>
                <Slide src={imagem}/>
            </div>
            <div>
                <Slide src={imagem}/>
            </div>
            <div>
                <Slide src={imagem}/>
            </div>
            <div>
                <Slide src={imagem}/>
            </div>
            <div>
                <Slide src={imagem}/>
            </div>
            
        </Slider>
    );
}