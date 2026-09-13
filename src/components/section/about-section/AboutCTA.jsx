import { Link } from "react-router";

const AboutCTA = () => {
  return (
    <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Mari Bertumbuh Bersama.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#F5F7F9] sm:text-base">
            Konsultasikan kebutuhan mesin fabrikasi Anda. Kami akan membantu
            mencari solusi paling sesuai dengan kebutuhan dan anggaran Anda.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#F5F7F9] px-6 py-3 text-sm font-semibold text-[#0D2C5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6DB8D3] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
        >
          Hubungi Kami <span aria-hidden="true">→</span>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
