"use client"

import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import {useRouter} from "next/navigation";
import {Card, CardContent} from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {titleBanner} from "@/app/config/fonts";

export const dataCarrouselTop =[
    {
        id:1,
        title: "Pago contra entrega",
        description: "Los mejores productos",
        link:"#"
    },
    {
        id:2,
        title: "Descubre lo extraordinario en nuestra tienda",
        description: "Atencion personalizada",
        link:"#"
    },
    {
        id:3,
        title: "Envío a toda Colombia",
        description: "Atencion personalizada",
        link:"#"
    },
    {
        id:4,
        title: "Productos únicos ",
        description: "Cada artículo ha sido cuidadosamente seleccionado para sorprenderte con su originalidad",
        link:"#"
    }
]


export default function CarrucelComponent() {
    const  router = useRouter();
    return(
        <div className="bg-sky-500 " >
            <Carousel className="w-full max-w-4xl mx-auto"
            plugins={[
                Autoplay({
                   delay: 2500
                         })
            ]}
            >
                <CarouselContent>
                    {dataCarrouselTop.map(({id, title,description,link}) => (
                        <CarouselItem key={id} onClick={()=>router.push(link)} className="cursor-pointer" >
                            <div>
                                <Card className="shadow-none border-none bg-transparent">
                                    <CardContent className="flex flex-col justify-center p-2 items-center text-center" >
                                        <p className={`${titleBanner.className}  sm:text-2xl text-wrap `}>{title}</p>
                                        <p className={`${titleBanner.className}  sm:text-lg text-wrap`}>{description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    )

}