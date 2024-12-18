'use server'
import prisma from "@/lib/prisma";

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
            images: productData.ProductImage.map(image => image.url),
        }

    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }

}