import {getProductBySlug} from "@/components/actions/product/product-by-slug";

interface Props {
    params:{
        slug:string;
    }
}


export default async function ProductPage({params}:Props) {

    const {slug} = await params;
    const {products} = await getProductBySlug({slug});

    console.log(slug);
    return(
        <div>
        <h1>Product Page</h1>
        </div>
    )

}