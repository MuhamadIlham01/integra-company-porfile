import { Rocket, Quote } from "lucide-react";

const AboutStorySection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 lg:items-start">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            CERITA KAMI
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0D2C5A] sm:text-4xl">
            Perjalanan Baru, Komitmen yang Jelas.
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="relative rounded-2xl border border-[#A8B4BE]/30 bg-white p-7 shadow-sm sm:p-9">
            <Quote
              aria-hidden="true"
              className="absolute -top-4 left-7 text-[#6DB8D3]"
              size={32}
            />
            <p className="text-base leading-7 text-gray-700 sm:text-lg">
              PT Integra Mesin Global lahir dari kebutuhan nyata di lapangan:
              banyak pelaku industri fabrikasi logam di Indonesia kesulitan
              mengakses mesin presisi berkualitas internasional tanpa harus
              menghadapi proses impor yang rumit dan tidak transparan.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
              Kami hadir sebagai jembatan — mencarikan mesin yang tepat,
              memastikan legalitas impor berjalan bersih, dan mendampingi
              pelanggan dari konsultasi teknis hingga instalasi di lokasi.
            </p>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-[#F5F7F9] p-6 sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0D2C5A] text-white">
              <Rocket size={20} />
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#0D2C5A]">
                Kami Baru, dan Itu Keunggulan Kami
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Sebagai perusahaan yang baru berdiri, kami tidak terikat pada
                cara lama. Setiap pelanggan mendapat perhatian penuh, komunikasi
                langsung dengan tim teknis, dan solusi yang benar-benar
                disesuaikan — bukan sekadar jual-beli mesin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStorySection;
