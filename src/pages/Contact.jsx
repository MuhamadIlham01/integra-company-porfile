import Footer from "../components/layout/Footer";
import NavBar from "./../components/layout/NavBar";
import ContactBox from "../components/section/contact-section/ContactBox";
import ContactCTA from "../components/section/contact-section/ContactCTA";
import contactHero from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen bg-[#F5F7F9] text-gray-900">
        <section
          className="relative isolate overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${contactHero})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#071827]/70" />
          <div className="mx-auto flex min-h-120 max-w-7xl items-end px-6 pb-20 pt-28 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold tracking-[0.24em] text-[#6DB8D3]">
                HUBUNGI KAMI
              </p>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Mari Diskusikan Kebutuhan Mesin Anda.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#F5F7F9] sm:text-lg">
                Tim kami siap membantu menemukan solusi mesin dan layanan
                industri yang sesuai dengan kebutuhan produksi Anda.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9] py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <ContactBox />
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
