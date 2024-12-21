import prisma from "@/lib/prisma";
import {ProductFeatureType} from "@/components/types/product";

export const getFeaturesProduct = async ()=>{
    try {
        const featureProducts = await prisma.featureProducts.findMany({


        });

        return{
            featureproducts: featureProducts.map((featureproduct:ProductFeatureType)=>({
                ...featureproduct,
            }))
        }


    }catch (error){
        throw  new Error('no se pudo cargar los productos');
    }


}