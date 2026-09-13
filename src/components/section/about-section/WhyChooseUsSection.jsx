import { FileCheck, Wrench, Globe, Users } from "lucide-react";

const reasons = [
  {
    icon: FileCheck,
    title: "Legalitas Impor Bersih",
    description:
      "NIB dan API-U terdaftar. Setiap unit masuk melalui jalur resmi dengan dokumen lengkap.",
  },
  {
    icon: Wrench,
    title: "Dukungan Teknis Lokal",
    description:
      "Tim teknis kami membantu instalasi, kalibrasi, dan troubleshooting langsung di lokasi Anda.",
  },
  {
    icon: Globe,
    title: "Jaringan Produsen Global",
    description:
      "Kami bermitra dengan produsen mesin presisi terverifikasi dari berbagai negara untuk memberi opsi terbaik.",
  },
  {
    icon: Users,
    title: "Pendekatan Personal",
    description:
      "Sebagai perusahaan baru, setiap klien adalah prioritas. Anda berkomunikasi langsung dengan pengambil keputusan.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            KENAPA KAMI
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0D2C5A] sm:text-4xl">
            Alasan Memilih PT Integra Mesin Global.
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-600">
            Kami tahu bahwa memilih mitra pengadaan mesin bukan keputusan kecil.
            Karena itu kami membangun kepercayaan lewat transparansi, bukan
            klaim berlebihan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl bg-[#F5F7F9] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#1F5C8C] shadow-sm">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#0D2C5A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
