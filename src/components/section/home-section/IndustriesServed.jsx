import { Building2, Droplets, Home, Car } from "lucide-react";

const IndustryCard = ({ icon, title, description, applications }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-400 group">
      <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy-700 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {applications.map((app, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 text-slate-600 px-2.5 py-1 rounded-full"
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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Industri yang Didukung
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-2 mb-4">
            Sektor Manufaktur yang Kami Layani
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Lini mesin kami dirancang untuk memenuhi standar produksi berbagai
            sektor industri manufaktur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
