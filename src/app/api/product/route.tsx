import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export function GET() {
    return NextResponse.json('todos los productos');
}

export async function POST(request: Request) {
    try {
        const categoriesDB = await prisma.category.findMany();


        const categoriesMap = categoriesDB.reduce((map:Record<string, string>, category:{ name: string; id: string }) => {
            map[category.name] = category.id;
            return map;
        }, {} as Record<string, string>);


        const body = await request.json();


        if (!Array.isArray(body)) {
            return NextResponse.json({ message: "Se esperaba un array de productos." }, { status: 400 });
        }


        const newProducts = await Promise.all(
            body.map(async (product) => {
                const {
                    title,
                    decriptionProduct,
                    inStock,
                    price,
                    slug,
                    category,
                    images,
                } = product;

                return prisma.product.create({
                    data: {
                        title,
                        decriptionProduct,
                        inStock,
                        price,
                        slug,
                        categoryId: categoriesMap[category],
                        ProductImage: {
                            create: images.map((url: string) => ({ url })),
                        },
                    },
                });
            })
        );


        return NextResponse.json(newProducts, { status: 201 });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            );
        }
    }
}
