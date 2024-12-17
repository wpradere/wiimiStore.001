'use server'

import prisma from "@/lib/prisma";

interface Props {
    id:string;
}

export const getCategoryByName = async ({
id,
                                        }:Props)=>{

    try{
        const categories = await prisma.category.findMany({
           where:{
               name:id,
           }

        })
        return{
            categoryFind: categories.map(category=>({
                ...category,
            }))
        }

    }catch (error) {
        throw  new Error('no se pudo cargar los categorias');
    }
}