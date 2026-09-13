import { Link } from "react-router";
import aboutHero from "../../../assets/mesin-hero.jpg";

const AboutHeader = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutHero})` }}
    >
      <div className="absolute inset-0 -z-10 bg-[#071827]/70" />

      <div className="mx-auto flex min-h-120 max-w-7xl items-end px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#6DB8D3]">
            TENTANG KAMI
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
            Menghadirkan Teknologi Presisi untuk Industri.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
            PT Integra Mesin Global — mitra B2B machine sourcing yang
            menghubungkan industri fabrikasi logam Indonesia dengan produsen
            mesin presisi terverifikasi, lengkap legalitas impor dan dukungan
            purna jual.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1F5C8C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2C5A] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
            >
              Lihat Katalog
              <span aria-hidden="true">→</span>
            </Link>
            {/* <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Hubungi Kami
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
