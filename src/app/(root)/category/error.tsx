"use client"

import Link from "next/link";

interface Props {
    params:{
        id:string
    }
}

export default function () {
    return(
        <div>
            <h1> 404 Not found</h1>
            <Link href="/"> Regresar</Link>
        </div>
    )

}