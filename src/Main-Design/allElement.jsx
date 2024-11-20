import { React, useState } from 'react';
import Swiper from 'swiper';
import { Controller, EffectFade, Virtual } from 'swiper/modules';
import { SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';

export default function SlideNextButton() {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    const slides = Array.from({ length: 1000 }).map(
        (el, index) => `Slide ${index + 1}`

    );
    const [controlledSwiper, setControlledSwiper] = useState(null);


    return (
        <div>
            <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            {/* <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p> */}
            <Swiper>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <span slot="container-start">Container Start</span>
                <span slot="container-end">Container End</span>
                <span slot="wrapper-start">Wrapper Start</span>
                <span slot="wrapper-end">Wrapper End</span>
            </Swiper>

            <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
                {slides.map((slideContent, index) => (
                    <SwiperSlide key={slideContent} virtualIndex={index}>
                        {slideContent}
                    </SwiperSlide>
                ))}
            </Swiper>

            <main>
       
        <Swiper modules={[Controller]} controller={{ control: controlledSwiper }} >
         
        </Swiper>

        
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper} >
         
        </Swiper>
      </main>
      {/* <Swiper modules={[EffectFade]} effect="fade">
      {[1, 2, 3].map((i, el) => {
        return <SwiperSlide>Slide {el}</SwiperSlide>;
      })}
    </Swiper> */}
        </div>
    );
}