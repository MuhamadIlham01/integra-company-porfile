import { Sparkles } from "lucide-react";

const AboutHeader = () => {
  return (
    <header
      id="about"
      className="relative text-center pt-24 md:pt-28 mb-8 md:mb-10 scroll-mt-24 md:scroll-mt-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -top-10 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#A8B4BE 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div
          className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border bg-white"
          style={{ borderColor: "#6DB8D355" }}
        >
          <Sparkles size={14} style={{ color: "#1F5C8C" }} />
          <span
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: "#1F5C8C" }}
          >
            Tentang Kami
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-2xl mx-auto mb-3">
          <span style={{ color: "#0D2C5A" }}>
            Menjembatani Industri Fabrikasi Logam
          </span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #1F5C8C, #6DB8D3)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            dengan Teknologi Presisi Dunia
          </span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          style={{ color: "#0D2C5A99" }}
        >
          PT Integra Mesin Global — mitra B2B machine sourcing yang
          menghubungkan industri fabrikasi logam Indonesia dengan produsen mesin
          presisi terverifikasi, lengkap legalitas impor dan dukungan purna
          jual.
        </p>
      </div>
    </header>
  );
};

export default AboutHeader;
