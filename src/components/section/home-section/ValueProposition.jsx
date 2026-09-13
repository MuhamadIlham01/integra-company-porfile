import { Factory, Shield, CheckCircle, Headset } from "lucide-react";

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-400">
      <div className="w-14 h-14 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-navy-700 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ValueProposition = () => {
  const values = [
    {
      icon: <Factory size={28} />,
      title: "Akses Pabrik Terverifikasi",
      description:
        "Kemitraan produsen mesin presisi standar CE/ISO terverifikasi langsung dari pabrik terpercaya di luar negeri.",
    },
    {
      icon: <Shield size={28} />,
      title: "Legalitas & Kepabeanan Bersih",
      description:
        "Impor resmi dengan NIB/API-U terintegrasi, menjamin kepastian hukum dan kelancaran proses bea cukai.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Quality Control Mandiri",
      description:
        "Pengecekan spesifikasi & uji fungsi menyeluruh sebelum unit dikirim dari pabrik ke lokasi pelanggan.",
    },
    {
      icon: <Headset size={28} />,
      title: "Dukungan Purna Jual Lokal",
      description:
        "Instalasi lapangan, kalibrasi, garansi, dan ketersediaan sparepart untuk memastikan operasional berkelanjutan.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Nilai Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-2 mb-4">
            Mitra Terpercaya untuk Kebutuhan Mesin Fabrikasi Anda
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami menghadirkan solusi pengadaan mesin yang transparan, legal, dan
            terukur dengan standar industri global.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
