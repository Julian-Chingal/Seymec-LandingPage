import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function Card({ image, href, title, description }: CardProps) {
  return (
    <a href={href}>
      <div className="w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-lg group">
        <div
          className={cn(
            "cursor-pointer overflow-hidden relative rounded-md shadow-xl flex flex-col justify-end p-4",
            "h-64 sm:h-72 md:h-80 lg:h-96" // Ajuste de altura responsivo
          )}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover:bg-black opacity-60"></div>
          <div className="z-10">
            {/* Contenedor del título con altura fija */}
            <div className="h-12 flex items-end"> {/* Ajusta la altura según sea necesario */}
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl text-gray-50">
                {title}
              </h1>
            </div>
            <p className="font-normal text-sm md:text-base lg:text-lg text-gray-50 mt-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
