import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Belum Yakin Mesin Apa yang Dibutuhkan?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Lihat katalog mesin kami terlebih dahulu, atau langsung konsultasi
            dengan tim teknis kami untuk rekomendasi yang sesuai.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0D2C5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            Lihat Katalog <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Lihat Layanan
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
