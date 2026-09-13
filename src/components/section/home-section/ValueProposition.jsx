import { Factory, Shield, CheckCircle, Headset } from "lucide-react";

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#6DB8D3] hover:shadow-xl">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#F5F7F9] text-[#1F5C8C] transition-all duration-300 group-hover:bg-[#1F5C8C] group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-[#0D2C5A]">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
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
    <section className="mx-auto max-w-7xl border-t border-[#6DB8D3]/40 bg-[#F5F7F9]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 text-left sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            Nilai Layanan
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
            Mitra Terpercaya untuk Kebutuhan Mesin Fabrikasi Anda
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Kami menghadirkan solusi pengadaan mesin yang transparan, legal, dan
            terukur dengan standar industri global.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
