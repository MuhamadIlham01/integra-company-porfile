import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import AboutHeader from "../components/section/about-section/AboutHeader";
import LegalProfileSection from "../components/section/about-section/LegalProfileSection";
import VisionMissionSection from "../components/section/about-section/VisionMissionSection";
import NavBar from "../components/layout/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <main className="bg-[#F5F7F9] text-gray-900">
        <section className="border-b border-[#A8B4BE]/25">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="mb-8">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
                PROFIL PERUSAHAAN
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
                Mitra industri yang dapat diandalkan
              </h2>
            </div>
            <LegalProfileSection />
          </div>
        </section>

        <section className="border-b border-[#A8B4BE]/25">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
              <div>
                <p className="text-sm font-medium text-[#A8B4BE]">Arah kami</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
                  Visi dan Misi
                </h2>
              </div>
              <span className="hidden text-sm text-[#A8B4BE] sm:block">
                02 prinsip utama
              </span>
            </div>
            <VisionMissionSection />
          </div>
        </section>

        <section>
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Mari tumbuh bersama industri Indonesia.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-6 text-[#F5F7F9] sm:text-base">
                  Diskusikan kebutuhan mesin dan rencana produksi Anda bersama tim kami.
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

export default About;
