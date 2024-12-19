

import CardProductsByCategory from "@/components/Products-card-caregory";



export default async function CategoryById({ params }: { params: { nameCategory: string } }) {

    const {nameCategory} = await params;



    return(
        <div className=" flex flex-wrap justify-center  m-20 sm:flex-row gap-10 mb-10">
            <CardProductsByCategory nameCategory={nameCategory}/>
        </div>
    )

}