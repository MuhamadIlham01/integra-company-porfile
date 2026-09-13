import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import ServiceCard from "../components/section/service-section/ServiceCard";
import services from "../data/services";
import servicesHero from "../assets/services.jpeg";

const Services = () => {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen bg-[#F5F7F9] text-gray-900">
        <section
          className="relative isolate overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesHero})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#071827]/70" />
          <div className="mx-auto flex min-h-120 max-w-7xl items-end px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#6DB8D3]">
                LAYANAN KAMI
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Solusi Mesin & Layanan Industri.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#F5F7F9] sm:text-lg">
                Menyediakan mesin, spare part, instalasi, dan layanan
                maintenance untuk mendukung kebutuhan operasional industri Anda.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
              <div>
                <p className="text-sm font-medium text-[#A8B4BE]">
                  Apa yang kami sediakan
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
                  Solusi Utama
                </h2>
              </div>
              <span className="hidden text-sm text-[#A8B4BE] sm:block">
                04 layanan
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <ServiceCard key={service.number} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Tertarik dengan Kami?
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#F5F7F9] sm:text-base">
                  Diskusikan kebutuhan mesin dan layanan industri Anda bersama kami.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F5F7F9] px-5 py-3 text-sm font-semibold text-[#0D2C5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6DB8D3] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
              >
                Hubungi Kami <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
