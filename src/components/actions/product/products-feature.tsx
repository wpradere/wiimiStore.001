import prisma from "@/lib/prisma";

export const getFeaturesProduct = async ()=>{
    try {
        const featureProducts = await prisma.featureProducts.findMany({


        });
        return{
            featureproducts: featureProducts.map(featureproduct=>({
                ...featureproduct,
            }))
        }

    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }


}