import { Button } from "@/components/ui/button";
import { RowsIcon,  ExitIcon } from "@radix-ui/react-icons";

import { useState } from "react";
const items = [
  { title: "Home", path: "/" },
  { title: "Proyectos", path: "/proyects" },
  { title: "Nosotros", path: "/about" },
  { title: "Contacto", path: "/contact" },
];

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-black shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
            <img src="/logo.svg" className="w-32" alt="" />
        </div>

        {/* Menu button for mobile */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="lg:hidden text-2xl"
        >
          {toggleMenu ? <ExitIcon /> : <RowsIcon />}
        </button>

        {/* Menu items */}
        <nav
          className={`${
            toggleMenu ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto lg:flex bg-white dark:bg-black lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
            {items.map((item, index) => (
              <li key={index} className="my-2 lg:my-0">
                <a
                  href={item.path}
                  className="block text-lg text-gray-700 dark:text-white hover:text-blue-500"
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
