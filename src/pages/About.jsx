import Footer from "../components/layout/Footer";
import AboutHeader from "../components/section/about-section/AboutHeader";
import LegalProfileSection from "../components/section/about-section/LegalProfileSection";
import AboutStorySection from "../components/section/about-section/AboutStorySection";
import CommitmentSection from "../components/section/about-section/CommitmentSection";
import WhyChooseUsSection from "../components/section/about-section/WhyChooseUsSection";
import VisionMissionSection from "../components/section/about-section/VisionMissionSection";
import AboutCTA from "../components/section/about-section/AboutCTA";
import NavBar from "../components/layout/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <main className="min-h-screen bg-[#F5F7F9] text-gray-900">
        <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
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

        <AboutStorySection />
        <CommitmentSection />
        <WhyChooseUsSection />

        <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
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

        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
