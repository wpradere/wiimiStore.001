"use client"

import {Swiper as SwiperObject} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Thumbs,Navigation} from "swiper/modules";
import React, {useState} from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import {Images} from "lucide-react";
import Image from "next/image";


interface Props {
    imges: string[],
    title: string,

}

export default function ProductSlidesShow({imges,title}: Props) {


    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>() ;
    return (
        <div>
            <Swiper
                style={{
                   '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }as React.CSSProperties
            }
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    imges.map((image,index, i) => (
                <SwiperSlide key={index}>
                    <Image
                        width={300}
                        height={300}
                        src={`/products/${image}`}
                        alt={title}
                        className="rounded-lg object-fill"
                    />
                </SwiperSlide>
                    ))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    imges.map((image,index, i) => (
                        <SwiperSlide key={index}>
                            <Image
                                width={300}
                                height={300}
                                src={`/products/${image}`}
                                alt={title}
                                className="rounded-lg object-fill"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )

}