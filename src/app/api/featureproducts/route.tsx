import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";

export  async  function POST (request:Request){
    try {
        const {title,decriptionProduct,inStock,price,slug,image} = await request.json();
        const productsFeatures = await prisma.featureProducts.create({
            data:{
                title,
                decriptionProduct,
                inStock,
                price,
                slug,
                image,
            }
        })

    }catch (error){
        if(error instanceof  Error){
            return NextResponse.json({
                message: error.message,
            })
        }
    }
    return NextResponse.json('creando featuring products')
}