'use server'


import prisma from "@/lib/prisma";


export const getPaginationProductWithImages = async ()=>{
    try {
        const products = await prisma.product.findMany({
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