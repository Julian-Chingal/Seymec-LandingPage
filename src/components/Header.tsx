import { Button } from "@/components/ui/button";
import { RowsIcon, ExitIcon } from "@radix-ui/react-icons";
import { navItems } from "@/config/links";

import { useState, useEffect } from "react";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta el desplazamiento para cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll",   
 handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed   
 top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background' : 'bg-background/10'
      } w-full`} // Usando clases de Tailwind para el ancho y fondo
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="">
          <img src="/logo.svg" className="w-32" alt="" />
        </div>

        <button onClick={() => setToggleMenu(!toggleMenu)} className="lg:hidden">
          {toggleMenu ? <ExitIcon className="h-6 w-6" /> : <RowsIcon className="h-6 w-6" />}
        </button>

        <nav className={`${toggleMenu ? 'block' : 'hidden'} 
        absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex dark:bg-black lg:bg-transparent shadow-lg lg:shadow-none`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className="my-2 lg:my-0">
                <a
                  href={item.path}
                  className="text-gray-300 hover:text-white"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}