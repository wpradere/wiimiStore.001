import {NextResponse} from "next/server";
import prisma from "@/lib/prisma";


export async function POST(request:Request){
    try{

        const {name,url} =await request.json()
        const  newCategory = await  prisma.category.create({
            data:{
                name,
                url
            }

        })

    }catch (error){
        if(error instanceof  Error){
            return NextResponse.json({
                message: error.message,
            })
        }
    }
    return NextResponse.json('creando categoria')
}