import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {getProductByCategory} from "@/components/actions/product/get-product-by-category";
import {ProductType} from "@/components/types/product";

interface Props {
    nameCategory: string;
}

export default async function CardProductsByCategory({nameCategory}: Props) {


    const {productsData} = await getProductByCategory(nameCategory);


    return (
        <>
            {

                productsData.map((product:ProductType) => (
                    <Card className="py-4 border border-gray-200 shadow-card" key={product.id}>
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

                    </Card>
                ))
            }
        </>
    )

}