import {getCategorysProducts} from "@/components/actions/product/get-categorys";
import Link from "next/link";
import Image from "next/image";
import {CategoryType} from "@/components/types/category";
import {tittle} from "@/app/config/fonts";



export default async function  ChooseCategory() {
    const  {categories} = await getCategorysProducts ();


    return(

           <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
               <h3 className={`${tittle.className} px-6 pb-4 text-3xl sm:pb-8 text-center justify-center items-center`}>CATEGORÍAS</h3>
               <div className="grid gap-5 sm:grid-cols-3">
                   {
                       categories !== undefined && (
                           categories.map((category:CategoryType,index) => (
                               <Link key={index}
                               href={`/category/${category.name}`}
                               className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg">
                                   <Image src={`/category/${category.url}`} alt={category.name}
                                          width={180}
                                          height={180}
                                          className=" transition duration-300 ease-in-out rounded-lg hover:scale-110 " />
                                <p className="absolute w-full py-2 text-lg font-bold text-center text-black bottom-5 backdrop-blur-lg ">{category.name}</p>

                               </Link>


                           ))
                       )}

               </div>

           </div>

    )

}