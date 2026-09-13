import { Link } from "react-router";
import Logo from "../../assets/logo.jpeg";

const Footer = () => {
  return (
    <section className="bg-[#0D2C5A] py-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          <div className="flex flex-col gap-2 justify-around">
            <Link to="/" className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  className="h-20 w-20 object-contain rounded-xl"
                  src={Logo}
                  alt="Logo PT. Integra Mesin Global"
                />

                <div className="flex flex-col leading-none">
                  <span className="text-3xl font-semibold tracking-tight text-[#F5F7F9]">
                    Integra Mesin
                  </span>
                  <span className="text-center text-[21px] font-medium tracking-[0.2em] text-[#6DB8D3]">
                    GLOBAL
                  </span>
                </div>
              </div>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-[#A8B4BE]">
              Mitra pengadaan mesin fabrikasi logam terpercaya di Indonesia —
              dari cutting, forming, punching, hingga finishing. Legalitas impor
              lengkap, garansi resmi, dan dukungan purna jual lokal.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest text-[#6DB8D3] uppercase">
                Navigasi
              </p>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="/about"
                    className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3] focus:text-[#6DB8D3]"
                  >
                    Tentang Kami
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3] focus:text-[#6DB8D3]"
                  >
                    Layanan Kami
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3] focus:text-[#6DB8D3]"
                  >
                    Produk Kami
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3] focus:text-[#6DB8D3]"
                  >
                    Kontak Kami
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold tracking-widest text-[#6DB8D3] uppercase">
              Hubungi Kami
            </p>

            <ul className="mt-6 space-y-4">
              <li className="text-base text-[#A8B4BE]">
                Ruko Niaga Kalimas Jl.inspeksi saluran Kalimalang Blok B18
                Jatimulya, Kec Tambun Selatan Kab.bekasi, Jawa Barat 1751
              </li>

              <li>
                <a
                  href="mailto:integramesinglobal@gmail.com"
                  className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3]"
                >
                  integramesinglobal@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+6287852183175"
                  className="flex text-base text-[#F5F7F9] transition-all duration-200 hover:text-[#6DB8D3] focus:text-[#6DB8D3]"
                >
                  +62 878 5218 3175
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-[#A8B4BE]/30" />

        <p className="text-sm text-center text-[#A8B4BE]">
          © Copyright 2026, All Rights Reserved by PT. Integra Mesin Global
        </p>
      </div>
    </section>
  );
};
export default Footer;
