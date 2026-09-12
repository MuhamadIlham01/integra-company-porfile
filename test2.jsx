import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/logo.jpeg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-s-0 top-0 z-20 w-full transition-colors duration-300 ${
        isScrolled
          ? "border-b border-black/10 bg-white shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-2">
        <NavLink
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          <img
            src={logo}
            className="h-11 w-11 object-contain rounded-full"
            alt="Integra Mesin Global Logo"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Integra Mesin
            </span>
            <span
              className={`text-center text-xs font-medium tracking-[0.2em] transition-colors duration-300 ${
                isScrolled ? "text-gray-500" : "text-gray-300"
              }`}
            >
              GLOBAL
            </span>
          </div>
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <NavLink
            to="/contact"
            className="text-white bg-[#1F5C8C] hover:bg-[#0D2C5A] rounded-2xl cursor-pointer border border-transparent shadow-[0_6px_16px_rgba(13,44,90,0.18)] hover:shadow-[0_12px_28px_rgba(13,44,90,0.28)] hover:-translate-y-0.5 transition-all duration-300 ease-out font-medium leading-5 rounded-base text-sm px-6 py-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Contact us
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-base md:hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-tertiary ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M5 7h14M5 12h14M5 17h14"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } w-full md:block md:max-h-none md:w-auto md:opacity-100 md:order-1`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 mt-4 font-medium rounded-xl shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:shadow-none ${
              isScrolled
                ? "border border-black/10 bg-white/95"
                : "border border-white/20 bg-black/20 backdrop-blur-md"
            }`}
          >
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `group relative block py-2 px-3 rounded transition-colors duration-300 md:p-0 ${
                      isActive
                        ? "text-[#1F5C8C]"
                        : isScrolled
                          ? "text-gray-900 hover:text-[#1F5C8C]"
                          : "text-white hover:text-gray-200"
                    }`
                  }
                >
                  <span className="relative">
                    {label}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1F5C8C] transition-all duration-300 group-hover:w-full" />
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
