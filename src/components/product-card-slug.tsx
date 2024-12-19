import {getProductBySlug} from "@/components/actions/product/product-by-slug";
import {formatPrice} from "@/lib/formatPrice";
import {tittle} from "@/app/config/fonts";
import ProductSlidesShow from "@/components/slideShow/productSlidesShow";


interface Props {
    slug: string
}

export default async function ProductCardSlug({slug}: Props) {
    // console.log(" - - - - - - - - -",slug);
    const productData = await getProductBySlug({slug});
    if (!productData) {
        return;
    }
    return (

        <div className="mt-5 grid md:grid-cols-3 gap-3 ">

            {/* slideshow*/}
            <div className="col-span-1 md:col-span-2">
                <ProductSlidesShow imges={productData.images} title={productData.title}/>
            </div>
            {/*detalles*/}

            <div className="col-span-1 px-5">
                <h1 className={`${tittle.className} antialiased font-bold text-2xl`}>
                    {productData.title}
                </h1>
                <p className=" text-xl mt-2 mb-5">{formatPrice(productData.price)}</p>
                {/*Boton */}
                {/*
                <button className="btn-primary ">
                    Agragar al carrito
                </button>
                */}

                {/*Descripcion */}

                <h3 className="font-bold text-lg  mt-8">Descripción </h3>
                <p className="font-light">
                    {productData.decriptionProduct}
                </p>

            </div>

        </div>

    )

}
