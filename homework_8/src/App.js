import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import SliderX from "./components/slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function App() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        adaptiveHeight: true,
        variableHeight: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <Navbar/>
            </div>
            <div>
                <h1>Nature in all it's glory!</h1>
                <SliderX/>
            </div>
            <div>
                <Footer/>
            </div>
        </Slider>
    );
}



