import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
];

const NavBar = () => {
  return (
    <>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 inset-s-0 border-b border-black/10 shadow-xs">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            to="/"
            className="flex items-center gap-4 transition-transform duration-300 ease-out hover:scale-[1.03]"
          >
            <img
              src={logo}
              className="h-11 w-11 object-contain transition-transform duration-300 ease-out"
              alt="Integra Mesin Global Logo"
            />

            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                Integra Mesin
              </span>
              <span className="text-center text-xs font-medium tracking-[0.2em] text-gray-500">
                GLOBAL
              </span>
            </div>
          </NavLink>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <NavLink
              to="/contact"
              className="text-white bg-[#1F5C8C] hover:bg-[#0D2C5A]
                rounded-2xl cursor-pointer border border-transparent
                shadow-[0_6px_16px_rgba(13,44,90,0.18)]
                hover:shadow-[0_12px_28px_rgba(13,44,90,0.28)]
                hover:-translate-y-0.5
                transition-all duration-300 ease-out
                font-medium leading-5 rounded-base text-sm px-6 py-2
                focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Contact us
            </NavLink>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              {navItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `group relative block py-2 px-3 rounded transition-colors duration-300 md:p-0 ${
                        isActive
                          ? "text-[#1F5C8C]"
                          : "text-heading hover:text-fg-brand"
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
    </>
  );
};

export default NavBar;
