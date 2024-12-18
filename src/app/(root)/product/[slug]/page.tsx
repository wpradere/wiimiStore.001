import {getProductBySlug} from "@/components/actions/product/product-by-slug";
import ProductCardSlug from "@/components/product-card-slug";

interface Props {
    params:{
        slug:string;
    }
}


export default async function ProductPage({params}:Props) {

    const {slug} = await params;



    return(
        <div>
       <ProductCardSlug slug={slug}  />
        </div>
    )

}