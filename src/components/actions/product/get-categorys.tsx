'use server'

import prisma from "@/lib/prisma";
import {CategoryType} from "@/components/types/category";

export const getCategorysProducts = async ()=>{

    try{
        const categories = await prisma.category.findMany({
            include: {
                Product: {
                    select: {
                        title:true
                    }
                }
            },

        })

        return{
            categories: categories.map(category=>({
              ...category,

            })) as CategoryType[],
        }

    }catch (error) {
        throw  new Error('no se pudo cargar los categorias');
    }
}