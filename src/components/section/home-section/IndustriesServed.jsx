import { Building2, Droplets, Home, Car } from "lucide-react";

const IndustryCard = ({ icon, title, description, applications }) => {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#6DB8D3] hover:shadow-xl">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5F7F9] text-[#1F5C8C] transition-all duration-300 group-hover:bg-[#1F5C8C] group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#0D2C5A]">{title}</h3>
      <p className="mb-3 text-sm text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {applications.map((app, idx) => (
          <span
            key={idx}
            className="rounded-full bg-[#F5F7F9] px-2.5 py-1 text-xs text-gray-600"
          >
            {app}
          </span>
        ))}
      </div>
    </div>
  );
};

const IndustriesServed = () => {
  const industries = [
    {
      icon: <Building2 size={28} />,
      title: "Sheet Metal & Steel Fabrication",
      description:
        "Solusi mesin untuk konstruksi baja dan workshop fabrikasi logam skala industri.",
      applications: ["Konstruksi baja", "Workshop fabrikasi", "Struktur berat"],
    },
    {
      icon: <Droplets size={28} />,
      title: "Tank & Pressure Vessel Manufacturing",
      description:
        "Peralatan presisi untuk pembuatan bejana tekan dan tangki industri.",
      applications: ["Bejana tekan", "Tangki industri", "Perpipaan besar"],
    },
    {
      icon: <Home size={28} />,
      title: "Architectural Decoration & Kitchenware",
      description:
        "Mesin finishing untuk aplikasi dekoratif dan peralatan dapur metal.",
      applications: [
        "V-grooving dekorasi",
        "Panel atap/dinding",
        "Kabinet metal",
      ],
    },
    {
      icon: <Car size={28} />,
      title: "Automotive & Industrial Mass Production",
      description:
        "Solusi stamping dan perakitan presisi untuk produksi massal komponen.",
      applications: [
        "Komponen stamping",
        "Perakitan presisi",
        "Produksi massal",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 text-left sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            Industri yang Didukung
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
            Sektor Manufaktur yang Kami Layani
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Lini mesin kami dirancang untuk memenuhi standar produksi berbagai
            sektor industri manufaktur.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              applications={industry.applications}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
