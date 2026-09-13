import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import workshopImage from "../../../assets/iron_worker_mesin.png";

const AboutHeader = () => {
  return (
    <header
      id="about"
      className="relative pt-24 md:pt-28 mb-16 scroll-mt-24 md:scroll-mt-28"
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #6DB8D3 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border bg-white/80 backdrop-blur-sm shadow-sm"
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

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.15] mb-5">
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
              className="text-base md:text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: "#0D2C5A99" }}
            >
              PT Integra Mesin Global — mitra B2B machine sourcing yang
              menghubungkan industri fabrikasi logam Indonesia dengan produsen
              mesin presisi terverifikasi, lengkap legalitas impor dan dukungan
              purna jual.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-300 hover:bg-white hover:shadow-md"
                style={{
                  borderColor: "#6DB8D355",
                  color: "#1F5C8C",
                }}
              >
                Lihat Katalog
              </Link>
            </div>

            <div
              className="flex items-center gap-2 mt-6 text-xs"
              style={{ color: "#0D2C5A80" }}
            >
              <ShieldCheck size={14} style={{ color: "#6DB8D3" }} />
              <span>
                Importir resmi terdaftar · Legalitas lengkap · Garansi resmi
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 w-40 h-40 rounded-full border-2 opacity-30"
              style={{ borderColor: "#6DB8D3" }}
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #1F5C8C 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <div
              className="relative rounded-3xl p-1 shadow-2xl shadow-blue-900/10"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0D2C5A, #1F5C8C, #6DB8D3)",
              }}
            >
              <div className="bg-white rounded-[22px] overflow-hidden">
                <div className="relative aspect-4/5">
                  <img
                    src={workshopImage}
                    alt="Workshop dan mesin fabrikasi PT Integra Mesin Global"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md">
                    <span
                      className="text-[10px] font-bold tracking-wide uppercase"
                      style={{ color: "#1F5C8C" }}
                    >
                      Since 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 min-w-35">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#6DB8D322" }}
                >
                  <ShieldCheck size={20} style={{ color: "#1F5C8C" }} />
                </div>
                <div>
                  <p
                    className="text-lg font-bold leading-none"
                    style={{ color: "#0D2C5A" }}
                  >
                    A+
                  </p>
                  <p
                    className="text-[10px] font-medium mt-0.5"
                    style={{ color: "#0D2C5A80" }}
                  >
                    Kualitas Terverifikasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AboutHeader;
