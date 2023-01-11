import { Container , Row , Col } from "react-bootstrap";
import { imageData } from "./jsonData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './slickSliderLogo.scss'
const SlickSliderLogo = ()=>{
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 12,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 8,
                slidesToScroll: 8,
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 6,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            }
          ]
    };

    return(
        <>
           <Container>
                 <Row className="image-slider-logo" >
                     <Slider {...settings}>
                        {
                            imageData?.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        <img src={ item?.icon} alt="img" />
                                    </div>
                                )
                            })
                        }
                     </Slider>
                 </Row>
           </Container>
        </>
    )
}

export default SlickSliderLogo;