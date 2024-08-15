"user-client";
import { useState } from "react";
import { Button } from "./ui/button";

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

export function Header() {
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <header className="bg-background shadow-md">
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          <img src="logo-texto.svg" alt="Logo Seymec" className="w-28" />
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 
            ${ isMenuOpen ? "top-0" : "top-[-100%]"} 
            md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {menuItems.map((item) => (
              <li className="">
                <a className="hover:text-blue-800" href={item.url}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6 ">
          <Button className="">Contacto</Button>

          <Button
            variant={"ghost"}
            onClick={toggleMenu}
            className="md:hidden text-3xl cursor-pointer"
          >
            <i className="fa-solid fa-bars" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
