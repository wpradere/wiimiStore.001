'use server'

import prisma from "@/lib/prisma";
import {CategoryType} from "@/components/types/category";
import {CategoryWithProductsType} from "@/components/types/product-category";

export const getCategorysProducts = async ()=>{

    try{
        const categories:CategoryType[] = await prisma.category.findMany({
            include: {
                Product: {
                    select: {
                        title:true
                    }
                }
            },

        })

        return{
            categories: categories.map((category:CategoryType)=>({
              ...category,

            })) as CategoryType[],
        }

    }catch (error) {
        throw  new Error('no se pudo cargar los categorias');
    }
}