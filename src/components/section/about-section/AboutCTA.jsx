import { Link } from "react-router";

const AboutCTA = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
      <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Mari Bertumbuh Bersama.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Konsultasikan kebutuhan mesin fabrikasi Anda. Kami akan membantu
            mencari solusi paling sesuai dengan kebutuhan dan anggaran Anda.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0D2C5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/40"
        >
          Hubungi Kami <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
};

export default AboutCTA;
