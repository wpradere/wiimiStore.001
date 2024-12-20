"use client"

import { useEffect } from "react";
import {titleFonts} from "@/app/config/fonts";
import Image from "next/image";

const SnowBanner = () => {
    useEffect(() => {
        const snowContainer = document.getElementById("snow-container");

        const createSnowflake = () => {
            const snowflake = document.createElement("div");
            snowflake.className = "absolute bg-white rounded-full opacity-75";
            snowflake.style.width = `${Math.random() * 10 + 5}px`;
            snowflake.style.height = snowflake.style.width;
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animation = `fall linear ${Math.random() * 5 + 3}s`;
            snowContainer.appendChild(snowflake);

            // Eliminar el copo después de su animación
            setTimeout(() => snowflake.remove(), 8000);
        };

        const interval = setInterval(createSnowflake, 100);
        return () => clearInterval(interval); // Limpiar intervalo
    }, []);

    return (
        <div className="flex h-[40rem] w-full bg-gradient-to-b from-sky-500 to-blue-50 overflow-hidden  items-start justify-start text-left "
        >
            <div className="flex flex-col md:flex-row">
            {/* Contenido del banner */}
            <div className="z-10  mt-9  ml-[2rem] pl-8 md:mt-56 md:ml-[10rem] ">
                <h1
                  ><span className={`${titleFonts.className} antialiased text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-50   ml-10 text-8xl  font-bold`}>wiimy</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-amber-50 font-bold text-xl">| Store</span>
                </h1>
                <p className="text-lg mt-2 md:text-4xl md:mt-14 text-black">Sorprende, regala, disfruta: ¡<span
                  className={`${titleFonts.className} text-3xl  text-black font-bold`}>wiimy</span> tiene lo que
                    buscas!</p>
                <p className="text-lg mt-5 md:text-2xl md:mt-10 text-black ">Los mejores productos a tu alcance</p>
            </div>

            <div>
                <Image src={"/banner/5. gorro-navidad-papa-noel-sinfondo.png"} alt={"banner"}
                width={390}
                height={390}
                className="mt-2 ml-6 md:m-56 "
                >

                </Image>
            </div>
            </div>

            {/* Contenedor de copos de nieve */}
            <div id="snow-container" className="absolute top-0 left-0 w-full h-full pointer-events-none"></div>

            {/* Animación personalizada */}
            <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
        </div>
    );
};

export default SnowBanner;
