import Link from "next/link";
import {titleFonts} from "@/app/config/fonts";

export default function CentralBanner() {
    return(
        <div className=" flex p-5 sm:p-20 text-center items-center justify-center ">
          <div className=" bg-white  text-center  rounded-lg p-16">
            <div>
                <span className="font-black text-xl text-primary">Únete a {"  "}</span>
                <span className={`${titleFonts.className} antialiased text-4xl font-bold`}>Wiimy</span>
                <span> | Store </span>
                <span className="font-black text-xl text-primary"> {" "} en nuestras redes sociales</span>
            </div>
            <h3 className="mt-3 text-lg font-semibold ">Contactanos por  WhatsApp</h3>
            <Link
                href="https://wa.me/573507798422"
                style={{ textDecoration: 'none', color: 'green', fontSize: '20px' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                Enviar Mensaje
            </Link>
          </div>
        </div>
    )

}