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
    <nav className="font-inter mx-auto h-auto w-full max-w-screen-2xl lg:relative lg:top-0">
      <div className="flex flex-col px-6 py-2 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-2 xl:px-20">
        <a href="#">
          <img src="/logo-texto.svg" alt="logo" className="w-32" />
        </a>
        <div className={`mt-8 flex flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
          open ? "" : "hidden lg:flex"
        }`}>
          {navbarItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className=" lg:px-6 lg:py-4  border-b-2 border-b-background hover:text-primary hover:border-b-primary"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className={`flex flex-col space-y-8 lg:flex lg:flex-row lg:space-x-3 lg:space-y-0 ${
          open ? "" : "hidden"
        }`}>
          <Button
            variant={"ghost"}
            className="px-4 mt-2"
            onClick={toggleDarkMode}
          >
            <i
              className={`fa-solid fa-lg transition-transform duration-300 ${
                isDarkMode
                  ? "fa-sun text-primary rotate-180"
                  : "fa-moon rotate-0"
              }`}
            />
          </Button>
        </div>
        <Button
          variant={"ghost"}
          className="absolute right-5 text-primary lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <i
            className={`fa-solid fa-lg transition-transform duration-300 ${
              open ? "fa-xmark rotate-90 opacity-100" : "fa-bars opacity-100"
            }`}
          />
        </Button>
      </div>
    </nav>
  );
}
