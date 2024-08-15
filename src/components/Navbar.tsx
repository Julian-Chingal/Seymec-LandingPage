import { useState } from "react";

const navbarItems = [
  { title: "Home", url: "/" },
  { title: "Proyectos", url: "/" },
  { title: "Nosotros", url: "/" },
  { title: "Contacto", url: "/" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-background border-b border-gray-200 fixed z-30 w-full ransition-all duration-300 ease-in">
      <div className="relative px-1 py-1 lg:px-3 lg:pl-2">
        <button
          onClick={() => setOpen(!open)}
          aria-expanded="true"
          aria-controls="sidebar"
          className="md:hidden absolute left-3 top-3 cursor-pointer p-2 hover:bg-primary-foreground rounded-sm z-40"
        >
          <i
            className={`fa-solid ${
              open ? "fa-xmark" : "fa-bars-staggered"
            } w-6`}
          />
        </button>

        <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between">
          <a
            href="#"
            className="text-xl font-bold flex items-center mb-2 md:mb-0"
          >
            <img
              src="/logo-texto.svg"
              alt="Esto es un logo"
              className="w-24 whitespace-nowrap"
            />
          </a>

          <div
            className={`${
              open ? "block" : "hidden"
            } md:flex items-center justify-center transition-all duration-200`}
          >
            <ul className="flex flex-col md:flex-row items-center">
              {navbarItems.map((item) => (
                <li className="p-2" key={item.title}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
