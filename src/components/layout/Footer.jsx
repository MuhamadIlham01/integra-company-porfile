import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-12">
          <div className="flex flex-col items-start">
            <Link to="/" className="flex items-center gap-4">
              <img
                className="w-auto h-24"
                src={Logo}
                alt="Logo PT. Integra Mesin Global"
              />
              <span className="text-xl font-semibold text-gray-800">
                PT. Integra Mesin Global
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Navigasi
            </p>

            <ul className="mt-6 space-y-4 md:text-center">
              <li>
                <Link
                  to="/about"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Hubungi Kami
            </p>

            <ul className="mt-6 space-y-4 text-right">
              <li className="text-base text-gray-600">
                Ruko niaga Kalimas jl.inspeksi saluran Kalimalang blok B18
                Jatimulya ,kec Tambun Selatan kab.bekasi ,Jawa Barat 1751
              </li>

              <li>
                <a
                  href="mailto:integramesinglobal@gmail.com"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 md:justify-end"
                >
                  integramesinglobal@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+6287852183175"
                  className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600 md:justify-end"
                >
                  +62 878 5218 3175
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright 2026, All Rights Reserved by PT. Integra Mesin Global
        </p>
      </div>
    </section>
  );
};
export default Footer;
