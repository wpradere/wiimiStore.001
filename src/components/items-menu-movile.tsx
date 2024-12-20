import {Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover";
import {IoListOutline} from "react-icons/io5";
import Link from "next/link";


export default function ItemsMenuMovile() {
    return(
       <Popover>
           <PopoverTrigger>
               <IoListOutline className="w-7 h-7 mr-3"/>
           </PopoverTrigger>
           <PopoverContent>
               <Link href="/category/Armables" className="block" >Armables</Link>
               <Link href="/category/Juguetes" className="block">Juguetes</Link>
               <Link href="/category/Llaveros" className="block">Llaveros</Link>
               <Link href="/category/Navidad" className="block">Navidad</Link>
           </PopoverContent>
       </Popover>
    )

}