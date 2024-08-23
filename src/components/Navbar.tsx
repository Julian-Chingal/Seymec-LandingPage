import { useState } from "react";
import { Button } from "./ui/button";

const navbarItems = [
  { title: "Home", url: "/" },
  { title: "Proyectos", url: "/" },
  { title: "Nosotros", url: "/" },
  { title: "Contacto", url: "/" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header>
      <nav className="flex p-2 h-16 w-[90%] mx-auto overflow-hidden max-w-screen-xl items-center justify-between ">
        
      <Button
          variant={"ghost"}
          onClick={() => setOpen(!open)}
          className={`cursor-pointer transition-all ${open ? "" : ""} md:hidden`}
        >
          <i className="fa-solid fa-bars fa-xl"></i>
        </Button>

        <a href="" className="max-w-[140px]">
          <img src="/logo-texto.svg" alt="" className="w-40" />
        </a>
        <div
          className={`fixed inset-0 bg-foreground/60 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          } md:static md:translate-x-0 md:bg-none`}
        >
          <Button
          variant={"outline"}
            onClick={() => setOpen(!open)}
            className="cursor-pointer border-none bg-background absolute z-30 md:hidden  transition-all"
          >
            <i className="fa-solid fa-xmark fa-xl"></i>
          </Button>

          <ul className="absolute inset-x-0 p-6 h-full w-[40%] bg-background rounded-md  text-center md:w-max  md-p-0 md:flex md:gap-4 md:static">
            {navbarItems.map((item, index) => (
              <li key={index} className="w-ful pt-5 md:pt-0 border-b-2 border-background hover:border-b-primary hover:text-primary">
                <a href="" className="hover:text-primary">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Button
            variant={"outline"}
            className="px-4 mt-2 border-none " 
            onClick={toggleDarkMode}
          >
            <i
              className={`fa-solid fa-xl transition-transform duration-300 ${
                isDarkMode
                  ? "fa-sun text-primary rotate-180"
                  : "fa-moon rotate-0"
              }`}
            />
          </Button>
      </nav>
    </header>
  );
}
