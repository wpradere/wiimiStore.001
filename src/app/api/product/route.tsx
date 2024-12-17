import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export function GET() {
    return NextResponse.json('todos los productos');
}

export async function POST(request: Request) {
    try {
        const categoriesDB = await prisma.category.findMany();

        // Crear un mapa de categorías para obtener su ID rápidamente.
        const categoriesMap = categoriesDB.reduce((map, category) => {
            map[category.name] = category.id;
            return map;
        }, {} as Record<string, string>);

        // Parsear el cuerpo de la solicitud
        const body = await request.json();

        // Verificar si se recibe un array
        if (!Array.isArray(body)) {
            return NextResponse.json({ message: "Se esperaba un array de productos." }, { status: 400 });
        }

        // Crear los productos uno por uno
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

        // Responder con los nuevos productos creados
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
