import React from "react";
// import Image from "../../../assets/images/bg10.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";

import "./swiperSection.css";

const SwiperSection = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction"
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="swiper-section"
            >
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1603573608528-62d6902517c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                        alt="swiper 1 "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1568334763051-b482f51a15f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="swiper 1 "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1641055621040-8fb3796a5a92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="swiper 1 "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1644574739831-d19ded59cae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                        alt="swiper 1 "
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://images.unsplash.com/photo-1644351032803-9c6f42458ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1071&q=80"
                        alt="swiper 1 "
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default SwiperSection;
