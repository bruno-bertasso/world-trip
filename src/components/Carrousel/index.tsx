import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Center, useBreakpointValue } from '@chakra-ui/react'
import { Slide } from './slide'




export const Carrousel = () => {
    const isLg = useBreakpointValue({ base: false, lg: true })
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                style={{
                    height: isLg ? "450px" : "250px", width: "1024px",

                }}

            >

                <SwiperSlide>
                    <Slide label="Ásia" description="O continente das tradições" image="asia.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide label="América do Sul" description="O continente da felicidade." image="south_america.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide label="América do Norte" description="O continente das oportunidades" image="north_america.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide label="Oceania" description="O continente exótico." image="oceania.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide label="Africa" description="O continente da humanidade." image="africa.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide label="Europa" description="O continente mais antigo" image="europe.png" />
                </SwiperSlide>



            </Swiper>
        </>
    );
};