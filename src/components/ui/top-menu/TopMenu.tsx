import Link from "next/link";
import {titleFonts} from "@/app/config/fonts";
import {IoCartOutline, IoHeart, IoHeartOutline, IoHeartSharp, IoSearchOutline} from "react-icons/io5";
import {MenuList} from "@/components/ui/menu-list/menu_list";
import ItemsMenuMovile from "@/components/items-menu-movile";


export default function     TopMenu() {
    return(

            <nav className="flex justify-between items-center ">
            {/*Logo*/}
            <div>
                <Link href="/">
                    <span className={`${titleFonts.className} antialiased ml-10 text-4xl font-bold`}>wiimy</span>
                    <span> | Store</span>
                </Link>
            </div>

            {/*Center Menu*/}
                <div className="  items-center justify-between hidden sm:flex">
                   <MenuList/>
                </div>


                {/*Search, cart , menu*/}
                <div className=" items-center justify-between hidden sm:flex ">

                    <Link href="/search" className="mx-2 ">
                        <IoSearchOutline className="w-7 h-7 "/>
                    </Link>
                    {/*<Link href="/loved-products" className="mx-2 ">
                        <IoHeartOutline className="w-7 h-7  w-"/>
                    </Link>

                    <Link href="/cart" className="mx-2  ">
                        <div className="relative">
                            <span className="absolute  mr-4 text-xs rounded-full  ppx-1 font-bold -top-2 bg-blue-700 text-white -right-1">3</span>
                            <IoCartOutline className="w-7 h-7 mr-3"/>
                        </div>
                    </Link>*/}
                </div>
                <div className="flex sm:hidden">
                    <ItemsMenuMovile/>
                </div>
            </nav>


    )

}