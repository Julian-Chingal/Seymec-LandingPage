import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const navigation = [
  { title: "Home", path: "/" },
  { title: "Servicios", path: "/services" },
  { title: "Nosotros", path: "/about" },
  { title: "Contacto", path: "/" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".menu-btn") && !target.closest(".nav-menu")) setMenuOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const logoSrc = scrolled ? "/logo.svg" : "/logoDark.svg";

  return (
    <header
      className={`fixed top-0 z-50 transition-all duration-300 w-full ${
        scrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4 lg:flex-row">
        <div>
          <img src={logoSrc} alt="Logo principal" className="w-auto h-16" />
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="menu-btn lg:hidden text-cyan-400"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav
          className={`nav-menu fixed top-0 right-0 w-3/4 h-full p-4 transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:translate-x-0 lg:flex lg:items-center lg:gap-8 lg:w-auto lg:h-auto ${
            menuOpen ? "bg-white text-black" : "lg:bg-transparent"
          }`}
        >
          <ul className="flex flex-col gap-8 lg:flex-row lg:gap-8">
            {navigation.map((item, index) => (
              <li key={index} className="hover:text-primary text-center">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>

          {/* <button>
            {isDarkMode ? (
              <SunIcon onClick={toggleDarkMode} className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon onClick={toggleDarkMode} className="w-6 h-6 text-primary" />
            )}
          </button> */}
        </nav>
      </div>
    </header>
  );
}
