"use client"

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {useRouter} from "next/navigation";
import {Card, CardContent} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {titleBanner} from "@/app/config/fonts";
import Image from "next/image";

export const dataCarrouselTop =[
    {
        id:1,
        title: "Pago contra entrega",
        description: "Los mejores productos",
        img: "2.BumperCarsinfondo_0002.png",
        link:"#"
    },
    {
        id:2,
        title: "Descubre lo extraordinario en nuestra tienda",
        description: "Atencion personalizada",
        img: "Dinosauriosinfondo-0045.png",
        link:"#"
    },
    {
        id:3,
        title: "Envío a toda Colombia",
        description: "Atencion personalizada",
        img: "1.LamparasMarioSinfondo-0032.png",
        link:"#"
    },
    {
        id:4,
        title: "Productos únicos ",
        description: "Cada artículo ha sido cuidadosamente seleccionado para sorprenderte con su originalidad",
        img: "CategoryArmablesAutosSinfondo.png",
        link:"#"
    }
]


export default function CarrucelComponent() {
    const  router = useRouter();
    return(
        <div className="flex justify-center">
        <div className="w-full carrousel-sing " >
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                   delay: 2500
                         })
            ]}
            >
                <CarouselContent>
                    {dataCarrouselTop.map(({id, title,description,link,img}) => (
                        <CarouselItem key={id} onClick={()=>router.push(link)} className="cursor-pointer" >
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center  p-10 items-center text-center" >
                                        <Image src={`/banner/${img}`} alt={title}
                                               width={350}
                                               height={350}
                                        />

                                        <p className={`${titleBanner.className}  sm:text-4xl text-wrap text-white `}>{title}</p>
                                        <p className={`${titleBanner.className}  sm:text-lg text-wrap`}>{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
        </div>
    )

}