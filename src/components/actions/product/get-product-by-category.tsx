'use server'


import prisma from "@/lib/prisma";






export const getProductByCategory = async (
                                               nameCategory:string,                                           )=>{
    try {
        const  categoryUrl =await  prisma.category.findUnique ({
            where:{
                name:nameCategory,
            }
        })

        if (!categoryUrl) {
            throw new Error(`Category with name "${nameCategory}" not found.`);
        }

        const products = await prisma.product.findMany({
            where:{
            categoryId:categoryUrl.id,
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
            productsData: products.map(product=>({
                ...product,
                images: product.ProductImage.map(image=>image.url)
            }))
        }

    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }
}