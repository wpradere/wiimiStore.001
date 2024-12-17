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
               <Link href="/category/armables" className="block" >Armables</Link>
               <Link href="/category/juguetes" className="block">Juguetes</Link>
               <Link href="/category/llaveros" className="block">Llaveros</Link>
               <Link href="/category/navidad" className="block">Navidad</Link>
           </PopoverContent>
       </Popover>
    )

}