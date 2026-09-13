import { ClipboardList, Search, Package, Truck, Settings } from "lucide-react";

const Step = ({ number, title, description, icon, isLast }) => {
  return (
    <div className="relative flex-1">
      {!isLast && (
        <div className="absolute -bottom-8 left-8 top-16 z-0 w-0.5 bg-[#A8B4BE] lg:bottom-auto lg:left-1/2 lg:top-8 lg:h-0.5 lg:w-full">
          <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1F5C8C] lg:bottom-auto lg:-right-1.5 lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2"></div>
        </div>
      )}
      <div className="flex items-start gap-4 lg:flex-col lg:items-center">
        <div className="relative z-10 flex w-16 shrink-0 justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0D2C5A] text-white">
            {icon}
          </div>
        </div>
        <div className="max-w-45 pt-1 text-left lg:mt-4 lg:pt-0 lg:text-center">
          <span className="text-xs font-bold text-[#1F5C8C]">
            STEP {String(number).padStart(2, "0")}
          </span>
          <h4 className="mt-1 text-sm font-semibold leading-tight text-[#0D2C5A]">
            {title}
          </h4>
          <p className="mt-1 text-xs leading-relaxed text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const SourcingWorkflow = () => {
  const steps = [
    {
      icon: <ClipboardList size={24} />,
      title: "Konsultasi Kebutuhan",
      description:
        "Analisis toleransi teknis & spesifikasi mesin sesuai kebutuhan produksi",
    },
    {
      icon: <Search size={24} />,
      title: "Kurasi Supplier",
      description:
        "Penawaran transparan dengan opsi EXW/FOB dari produsen terverifikasi",
    },
    {
      icon: <Package size={24} />,
      title: "Inspeksi & Pengapalan",
      description:
        "Uji fungsi di pabrik asal dan pengapalan sesuai jadwal yang disepakati",
    },
    {
      icon: <Truck size={24} />,
      title: "Customs Clearance",
      description:
        "Pengurusan bea cukai resmi dengan legalitas impor terintegrasi",
    },
    {
      icon: <Settings size={24} />,
      title: "Instalasi & Commissioning",
      description:
        "Pengiriman pabrik, instalasi, kalibrasi, dan uji coba operasional",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 text-left sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            Proses Kerja
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
            Alur Pengadaan Mesin yang Transparan
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Kami menjamin setiap tahap proses berjalan dengan standar tinggi dan
            komunikasi yang terbuka.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center lg:gap-4">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SourcingWorkflow;
