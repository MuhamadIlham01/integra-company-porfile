import { useState, useRef, useEffect } from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";
import {
  Wrench,
  Settings,
  PackageSearch,
  Factory,
  Headset,
  ShieldCheck,
  Users,
  Star,
  Handshake,
  FileText,
  Shield,
  Newspaper,
  HelpCircle,
  Phone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const serviceLinks = [
  {
    title: "Instalasi Mesin",
    href: "/services/instalasi",
    description: "Pemasangan dan setup mesin industri di lokasi klien",
    icon: Wrench,
  },
  {
    title: "Maintenance & Perbaikan",
    href: "/services/maintenance",
    description: "Perawatan berkala dan perbaikan mesin produksi",
    icon: Settings,
  },
  {
    title: "Suku Cadang",
    href: "/services/suku-cadang",
    description: "Ketersediaan spare part original dan bergaransi",
    icon: PackageSearch,
  },
  {
    title: "Pengadaan Mesin",
    href: "/services/pengadaan",
    description: "Supply mesin industri sesuai kebutuhan produksi",
    icon: Factory,
  },
  {
    title: "Konsultasi Teknis",
    href: "/services/konsultasi",
    description: "Pendampingan teknis dari tim ahli kami",
    icon: Headset,
  },
  {
    title: "Dukungan Purna Jual",
    href: "/services/purna-jual",
    description: "Garansi dan layanan after-sales terpercaya",
    icon: ShieldCheck,
  },
];

const companyLinks = [
  {
    title: "Tentang Kami",
    href: "/about",
    description: "Profil, visi, dan sejarah perusahaan kami",
    icon: Users,
  },
  {
    title: "Testimoni Klien",
    href: "/testimonials",
    description: "Kisah sukses klien yang telah kami bantu",
    icon: Star,
  },
  {
    title: "Kemitraan",
    href: "/partnership",
    description: "Berkolaborasi dengan kami untuk pertumbuhan bersama",
    icon: Handshake,
  },
];

const companyLinks2 = [
  { title: "Syarat & Ketentuan", href: "/terms", icon: FileText },
  { title: "Kebijakan Privasi", href: "/privacy", icon: Shield },
  { title: "Blog", href: "/blog", icon: Newspaper },
  { title: "Pusat Bantuan", href: "/help", icon: HelpCircle },
];

const ListItem = ({ title, description, icon: Icon, href }) => (
  <Link
    to={href}
    className="flex flex-row gap-x-2 rounded-md p-2 hover:bg-gray-100 transition-all duration-200"
  >
    <div className="flex items-center justify-center shrink-0 border rounded-md shadow-sm size-12 bg-gray-50">
      <Icon className="text-gray-700 size-5" />
    </div>
    <div className="flex flex-col justify-center">
      <span className="text-sm font-medium text-black">{title}</span>
      {description && (
        <span className="text-xs text-gray-500">{description}</span>
      )}
    </div>
  </Link>
);

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 ${
        scrolled
          ? "border-b border-gray-200 shadow-sm"
          : "border-b border-transparent"
      }`}
    >
      <nav
        ref={navRef}
        className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 gap-2">
          <img
            className="w-auto h-10"
            src={Logo}
            alt="PT. Integra Mesin Global"
          />
          <span className="hidden text-base font-semibold text-black sm:block">
            PT. Integra Mesin Global
          </span>
        </Link>

        {/* Nav tengah - desktop */}
        <div className="items-center hidden gap-1 md:flex">
          {/* Layanan */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("services")}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-black transition-all duration-200 rounded-md hover:bg-gray-100"
            >
              Layanan
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  openMenu === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "services" && (
              <div className="absolute left-0 p-2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg top-full w-130">
                <ul className="grid grid-cols-2 gap-1">
                  {serviceLinks.map((item) => (
                    <li key={item.title}>
                      <ListItem {...item} />
                    </li>
                  ))}
                </ul>
                <div className="p-2 mt-1 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Butuh solusi khusus?{" "}
                    <Link
                      to="/contact"
                      className="font-medium text-black hover:underline"
                    >
                      Konsultasi gratis
                    </Link>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Perusahaan */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("company")}
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-black transition-all duration-200 rounded-md hover:bg-gray-100"
            >
              Perusahaan
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  openMenu === "company" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === "company" && (
              <div className="absolute left-0 grid grid-cols-2 gap-2 p-2 mt-2 bg-white border border-gray-200 rounded-md shadow-lg top-full w-130">
                <ul className="space-y-1">
                  {companyLinks.map((item) => (
                    <li key={item.title}>
                      <ListItem {...item} />
                    </li>
                  ))}
                </ul>
                <ul className="p-1 space-y-1">
                  {companyLinks2.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.href}
                        className="flex flex-row items-center p-2 rounded-md gap-x-2 hover:bg-gray-100"
                      >
                        <item.icon className="text-gray-700 size-4" />
                        <span className="text-sm font-medium text-black">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Produk */}
          <Link
            to="/products"
            className="px-4 py-2 text-sm font-medium text-black transition-all duration-200 rounded-md hover:bg-gray-100"
          >
            Produk
          </Link>
        </div>

        {/* Kanan - desktop */}
        <div className="items-center hidden gap-2 md:flex">
          <a
            href="tel:+622112345678"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <Phone className="size-4" />
            +62 21 1234 5678
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Tombol menu - mobile */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center text-black border border-gray-300 rounded-md md:hidden w-9 h-9"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Menu - mobile */}
      {mobileOpen && (
        <div className="px-4 pb-6 overflow-y-auto bg-white border-t border-gray-200 md:hidden max-h-[80vh]">
          <p className="pt-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Layanan
          </p>
          <div className="mt-2 space-y-1">
            {serviceLinks.map((item) => (
              <ListItem key={item.title} {...item} />
            ))}
          </div>

          <p className="pt-6 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Perusahaan
          </p>
          <div className="mt-2 space-y-1">
            {companyLinks.map((item) => (
              <ListItem key={item.title} {...item} />
            ))}
            {companyLinks2.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="flex flex-row items-center p-2 rounded-md gap-x-2 hover:bg-gray-100"
              >
                <item.icon className="text-gray-700 size-4" />
                <span className="text-sm font-medium text-black">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <p className="pt-6 text-xs font-semibold tracking-widest text-gray-400 uppercase">
            Produk
          </p>
          <div className="mt-2">
            <Link
              to="/products"
              className="block p-2 text-sm font-medium text-black rounded-md hover:bg-gray-100"
            >
              Semua Produk
            </Link>
          </div>

          <div className="flex flex-col gap-2 pt-6 mt-6 border-t border-gray-200">
            <a
              href="tel:+622112345678"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-black transition-all duration-200 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <Phone className="size-4" />
              +62 21 1234 5678
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
