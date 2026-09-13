import { Handshake, Eye, Clock, MessageSquare } from "lucide-react";

const commitments = [
  {
    icon: Handshake,
    title: "Transparansi Harga",
    description:
      "Setiap penawaran disertai rincian biaya, opsi EXW/FOB, dan estimasi waktu pengiriman — tanpa biaya tersembunyi.",
  },
  {
    icon: Eye,
    title: "Inspeksi Sebelum Kirim",
    description:
      "Kami melakukan pengecekan spesifikasi dan uji fungsi di pabrik asal sebelum unit dikapalkan ke Indonesia.",
  },
  {
    icon: Clock,
    title: "Respon Cepat",
    description:
      "Pertanyaan teknis dan permintaan kuotasi dijawab dalam 1×24 jam kerja melalui WhatsApp atau email.",
  },
  {
    icon: MessageSquare,
    title: "Pendampingan Penuh",
    description:
      "Dari konsultasi kebutuhan, pengurusan dokumen impor, hingga instalasi dan kalibrasi di lokasi Anda.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="bg-[#F5F7F9]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            KOMITMEN KAMI
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#0D2C5A] sm:text-4xl">
            Empat Janji yang Kami Pegang dari Hari Pertama.
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Kami belum punya daftar klien panjang, tapi kami punya standar yang
            tidak akan kami turunkan.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-[#A8B4BE]/25 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1F5C8C]/40 hover:shadow-[0_18px_40px_rgba(13,44,90,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6DB8D3]/15 text-[#1F5C8C] transition-colors duration-300 group-hover:bg-[#1F5C8C] group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-[#0D2C5A]">
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

export default CommitmentSection;
