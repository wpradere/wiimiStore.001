import {Product} from "@/components/interfaces/product-interface";
import Image from "next/image";
import Link from "next/link";
import {Expand} from "lucide-react";
import IconButton from "@/components/icon-button";
import {Card, CardContent} from "@/components/ui/card";
import {getProductByCategory} from "@/components/actions/product/get-product-by-category";

interface Props{
    nameCategory: string;
}

export default async  function CardProductsByCategory({nameCategory}: Props) {


   const {products} = await getProductByCategory(nameCategory);

    console.log(" - - - - - - - " ,products);

    return (
        <>

        {/* <Card className="py-4 border border-gray-200 shadow-card">
            <CardContent className="relative flex items-center justify-center px-6 py-2 ">

                <Link href={`/product/${product.slug}`}>

                    <Image src={`/products/${product.images[0]}`} alt={product.title}
                           width={280}
                           height={280}
                           className="w-full h-full object-cover"/>
                    <div>
                        <h1 className="text-lg text-cyan-800"> {product.title}</h1>

                    </div>


                </Link>


            </CardContent>

        </Card>*/}
        </>
    )

}