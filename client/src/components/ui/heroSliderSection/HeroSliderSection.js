import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import data from "../../../data/creative-agency-data.json";

import "swiper/swiper.min.css";

import "./heroSliderSection.css";

import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import SwiperCore, {
    EffectFade,
    Navigation,
    Autoplay,
    Pagination
} from "swiper";
SwiperCore.use([EffectFade, Navigation, Autoplay, Pagination]);

const HeroSliderSection = () => (
    <section className="pt-0 pb-0" id="home">
        <div className="hero-slider-section slider-bg flexslider">
            <ul className="slides">
                <Swiper
                    pagination={{
                        type: "fraction"
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {data.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className="slide-img"
                                style={{
                                    background: `url(${
                                        require("../../../assets/" +
                                            slide.image).default
                                    }) center center / cover scroll no-repeat`
                                }}
                            ></div>
                            <div className="hero-text-wrap ">
                                sdfdsdfsdfsdfs
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ul>
        </div>
    </section>
);

export default HeroSliderSection;
