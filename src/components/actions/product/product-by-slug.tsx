'use server'
import prisma from "@/lib/prisma";
import {ProductImageType} from "@/components/types/product";


interface Props {
    slug:string;
}


export const getProductBySlug = async ({
    slug,
                                       }:Props)=> {

    try {
        const productData = await prisma.product.findFirst({
            where:{
                slug:slug,
            },
            include: {
                ProductImage:{
                    select: {
                        url:true
                    }
                }
            }
        });

        if(!productData)return null;
        return{
            ...productData,
            images: productData.ProductImage.map((image:ProductImageType) => image.url),
        }

    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }

}