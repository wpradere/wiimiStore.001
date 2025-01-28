import {titleFonts} from "@/app/config/fonts";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const  dataFooter =[
    {
        id:1,
        name:"sobre nosotros",
        link:"#"
    },
    {
        id:2,
        name:"Productos",
        link:"#"
    },
    {
        id:3,
        name:"Mi cuenta",
        link:"#"
    },
    {
        id:4,
        name:"Politica de privacidad",
        link:"#"
    },

]

export default function FooterComponent() {
    return(
        <footer className="mt-4 bg-gradient-to-t from-black">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">

            <div className="sm:flex sm:items-center sm:justify-between">

                <p>
                    <span className={`${titleFonts.className}  font-bold`}>
                        wiimy
                    </span>
                    {' '} | Store
                </p>
                <ul className="flex flex-wrap items-center mb-6 text-sm font font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                {dataFooter.map((data: any) => (
                    <li key={data.id}>
                        <Link href={data.link} className="hover:underline me-4 md:me-6">
                            {data.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>

            <Separator className="my-6  border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">
                    &copy; 2024
                    <Link href="#"> wiimy . </Link>
                    Todos los derechos reservados
                </span>
            </div>

        </footer>
    )

}