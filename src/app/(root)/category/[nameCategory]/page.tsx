

import CardProductsByCategory from "@/components/Products-card";






export default async function CategoryById({ params }: { params: { nameCategory: string } }) {

    const {nameCategory} = await params;



    return(
        <div className=" flex flex-col justify-center  m-20 sm:flex-row gap-10 mb-10">
            <CardProductsByCategory nameCategory={nameCategory}/>
        </div>
    )

}