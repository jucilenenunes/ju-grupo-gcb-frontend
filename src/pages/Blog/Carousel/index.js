import { useState, useEffect } from "react";
import { CarouselContainer } from "./styles";
import BlogImage1 from '../../../assets/img/blog_image_1.svg';
import BlogImage2 from '../../../assets/img/blog_image_2.svg';
import BlogImage3 from '../../../assets/img/blog_image_3.svg';
import BlogImage4 from '../../../assets/img/blog_image_4.svg';
import UserImage1 from '../../../assets/img/user-01.png';
import UserImage2 from '../../../assets/img/user-02.png';
import UserImage3 from '../../../assets/img/user-03.png';
import UserImage4 from '../../../assets/img/user-04.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return { width };
}

const Carousel = () => {
    const { width } = useViewport();
    const slidesToShow = width <= 480 ? 1 : width <= 768 ? 2 : 3;
    const settings = {
        infinite: true,
        slidesToShow,
        speed: 500
    };

    return (
        <CarouselContainer {...settings}>
            <div>
                <img src={BlogImage1} alt="Quick-start guide to nuts and seeds" />
                <h3>Quick-start guide<br/>to nuts and seeds</h3>
                <div>
                    <img className="user" src={UserImage1} alt="Kevin Ibrahim" />
                    <span>Kevin Ibrahim</span>
                </div>
            </div>
            <div>
                <img src={BlogImage2} alt="Nutrition: Tips for Improving Your Health" />
                <h3>Nutrition: Tips for<br/>Improving Your Health</h3>
                <div>
                    <img className="user" src={UserImage2} alt="Mike Jackson" />
                    <span>Mike Jackson</span>
                </div>
            </div>
            <div>
                <img src={BlogImage3} alt="The top 10 benefits of eating healthy" />
                <h3>The top 10 benefits<br/>of eating healthy</h3>
                <div>
                    <img className="user" src={UserImage3} alt="Bryan McGregor" />
                    <span>Bryan McGregor</span>
                </div>
            </div>
            <div>
                <img src={BlogImage4} alt="What Makes a Healthy Diet?" />
                <h3>What Makes a<br/>Healthy Diet?</h3>
                <div>
                    <img className="user" src={UserImage4} alt="Jashua" />
                    <span>Jashua</span>
                </div>
            </div>
        </CarouselContainer>
    );
}

export default Carousel;