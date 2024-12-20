import {getPaginationProductWithImages} from "@/components/actions/product/product-paginations";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import SkeletonSchema from "@/components/skeletonSchema";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Expand} from "lucide-react";

import IconButton from "@/components/icon-button";
import {getFeaturesProduct} from "@/components/actions/product/products-feature";
import {titleFonts, tittle} from "@/app/config/fonts";


export default async function FeatureProductsComponent() {
    const {featureproducts} = await getFeaturesProduct();

    return (
        <div className="max-w-6xl py-4  mx-auto sm:py-16 sm:px-24 ">
            <h1 className={`${tittle.className} px-6 text-3xl sm:pb-8 items-center`}>Productos destacados</h1>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    <SkeletonSchema grid={0}/>
                    {featureproducts !== null && (
                        featureproducts.map((product) => {
                            const {id} = product
                            return (
                                <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                    <div className="p-1">
                                        <Card className="py-4 border border-gray-200 shadow-none">
                                            <CardContent
                                                className="relative flex items-center justify-center px-6 py-2 ">
                                                <Image src={`/products/${product.image}`} alt={product.title}
                                                       width={150}
                                                       height={150}
                                                />
                                                <div
                                                    className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5  ">
                                                    <div className="flex justify-center gap-x-6">
                                                        <IconButton className="text-gray-600"
                                                                    path={`product/${product.slug}`} icon={<Expand/>}/>
                                                        {/*<IconButton className="text-gray-600"
                                                                path={`product/${product.slug}`}
                                                                icon={<IoCartOutline/>}/>*/}
                                                    </div>
                                                </div>
                                            </CardContent>

                                            <div className="flex justify-between gap-4 px-5">
                                                <h3 className="text-lg font-bold">{product.title}</h3>
                                            </div>
                                            <div className="flex items-center justify-between gap-4 px-5">
                                                {/*<p>{`$${product.price}`}</p>*/} {/* futuro promocion*/}
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext className="hidden sm:flex"/>
            </Carousel>
        </div>
    )

}