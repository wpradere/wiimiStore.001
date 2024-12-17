'use server'
import prisma from "@/lib/prisma";

interface Props {
    slug:string;
}


export const getProductBySlug = async ({
    slug,
                                       }:Props)=> {
    try {
        const products = await prisma.product.findMany({
            where:{
                slug:slug,
            },
            include: {
                ProductImage:{
                    take:2,
                    select: {
                        url:true
                    }
                }
            }

        });
        return{
            products: products.map(product=>({
                ...product,
                images: product.ProductImage.map(image=>image.url)
            }))
        }

    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }

}