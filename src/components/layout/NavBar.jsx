import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { MessageCircle } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tentang", to: "/about" },
  { label: "Produk", to: "/products" },
  { label: "Layanan", to: "/services" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-s-0 top-0 z-20 w-full transition-all duration-300 ${
        isScrolled
          ? "border-[#A8B4BE]/30 bg-white/95 shadow-md backdrop-blur-md"
          : "border-white/15 bg-transparent"
      }`}
    >
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-[1.03]"
        >
          <img
            src={logo}
            className="h-11 w-11 object-contain rounded-xl"
            alt="Integra Mesin Global Logo"
          />
          <div className="flex flex-col leading-none">
            <span
              className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#0D2C5A]" : "text-[#F5F7F9]"
              }`}
            >
              Integra Mesin
            </span>
            <span
              className={`text-center text-xs font-medium tracking-[0.2em] transition-colors duration-300 text-[#1F5C8C] ${
                isScrolled ? "text-[#1F5C8C]" : "text-gray-400"
              }`}
            >
              GLOBAL
            </span>
          </div>
        </NavLink>

        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <NavLink
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-2xl bg-[#1F5C8C] px-3 text-sm font-medium leading-5 text-white shadow-[0_6px_16px_rgba(13,44,90,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#0D2C5A] hover:shadow-[0_12px_28px_rgba(13,44,90,0.28)] focus:outline-none focus:ring-4 focus:ring-blue-300 md:px-6"
            aria-label="Hubungi Kami"
            title="Hubungi Kami"
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5 md:hidden" />
            <span className="hidden md:inline">Hubungi Kami</span>
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-base p-2 text-sm transition-colors duration-300 md:hidden focus:outline-none focus:ring-2 ${
              isScrolled
                ? "text-[#0D2C5A] hover:bg-[#A8B4BE]/15 focus:ring-[#1F5C8C]/30"
                : "text-white hover:bg-white/10 focus:ring-white/40"
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
          } w-full md:order-1 md:block md:max-h-none md:w-auto md:opacity-100`}
          id="navbar-sticky"
        >
          <ul
            className={`mt-4 flex flex-col rounded-xl border p-4 font-medium shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
              isScrolled
                ? "border-[#A8B4BE]/30 bg-[#F5F7F9]"
                : "border-white/15 bg-[#0D2C5A]/95"
            }`}
          >
            {navItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `navbar-link rounded px-3 py-2 md:p-0 ${
                      isActive
                        ? "text-[#6DB8D3]"
                        : isScrolled
                          ? "text-[#0D2C5A] hover:text-[#1F5C8C]"
                          : "text-[#F5F7F9] hover:text-[#6DB8D3]"
                    }`
                  }
                >
                  {label}
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
