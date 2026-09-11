import React from "react";
import { ClipboardList, Search, Package, Truck, Settings } from "lucide-react";

const Step = ({ number, title, description, icon, isLast }) => {
  return (
    <div className="flex-1 relative">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 bg-navy-700 rounded-full flex items-center justify-center text-white z-10 relative">
            {icon}
          </div>
          {!isLast && (
            <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 -translate-y-1/2 z-0">
              <div className="w-3 h-3 bg-cyan-500 rounded-full absolute -right-1.5 top-1/2 -translate-y-1/2"></div>
            </div>
          )}
        </div>
        <div className="mt-4 text-center max-w-45">
          <span className="text-xs font-bold text-cyan-500">
            STEP {String(number).padStart(2, "0")}
          </span>
          <h4 className="text-sm font-semibold text-navy-700 mt-1 leading-tight">
            {title}
          </h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Proses Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-2 mb-4">
            Alur Pengadaan Mesin yang Transparan
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami menjamin setiap tahap proses berjalan dengan standar tinggi dan
            komunikasi yang terbuka.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">
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

          <div className="lg:hidden flex justify-between mt-4 px-4">
            {steps.map((_, index) => (
              <div
                key={index}
                className="flex-1 h-1 rounded-full mx-1"
                style={{
                  background:
                    index < steps.length - 1
                      ? "linear-gradient(to right, #284b70, #8E9AAF)"
                      : "#e5e7eb",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourcingWorkflow;
