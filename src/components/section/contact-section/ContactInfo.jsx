import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 878 5218 3175",
    href: "https://wa.me/6287852183175",
    note: "Senin–Sabtu, 08.00–17.00 WIB",
  },
  {
    icon: Mail,
    label: "Email",
    value: "integramesinglobal@gmail.com",
    href: "mailto:integramesinglobal@gmail.com",
    note: "Dibalas dalam 1×24 jam kerja",
  },
  {
    icon: MapPin,
    label: "Alamat Kantor",
    value:
      "Ruko Niaga Kalimas, Jl. Inspeksi Saluran Kalimalang Blok B18, Jatimulya, Kec. Tambun Selatan, Kab. Bekasi, Jawa Barat 17510",
    href: "https://maps.google.com/?q=Ruko+Niaga+Kalimas+Blok+B18+Tambun+Selatan",
    note: "Kunjungan dengan appointment",
  },
];

const ContactInfo = () => {
  return (
    <div className="rounded-2xl border border-[#A8B4BE]/25 bg-white p-7 shadow-sm sm:p-9">
      <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
        INFORMASI KONTAK
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
        Hubungi Kami Langsung.
      </h2>
      <p className="mt-3 text-sm leading-6 text-gray-600">
        Pilih kanal yang paling nyaman untuk Anda. Kami akan merespon secepat
        mungkin.
      </p>

      <ul className="mt-8 space-y-5">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-start gap-4 rounded-xl p-3 -m-3 transition-colors duration-200 hover:bg-[#F5F7F9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5C8C]/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#6DB8D3]/15 text-[#1F5C8C] transition-colors duration-300 group-hover:bg-[#1F5C8C] group-hover:text-white">
                  <Icon size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A8B4BE]">
                    {item.label}
                  </p>
                  <p className="mt-1 wrap-break-words text-sm font-medium text-[#0D2C5A]">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{item.note}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-8 rounded-xl bg-[#F5F7F9] p-5">
        <div className="flex items-start gap-3">
          <Clock
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-[#1F5C8C]"
            size={18}
          />
          <div>
            <p className="text-sm font-semibold text-[#0D2C5A]">
              Jam Operasional
            </p>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Senin–Jumat: 08.00–17.00 WIB
              <br />
              Sabtu: 08.00–13.00 WIB
              <br />
              Minggu & hari libur: Tutup
            </p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/6287852183175?text=Halo%20PT%20Integra%20Mesin%20Global%2C%20saya%20ingin%20konsultasi%20pengadaan%20mesin."
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F5C8C] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2C5A] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
      >
        <MessageCircle size={17} />
        Chat via WhatsApp
      </a>
    </div>
  );
};

export default ContactInfo;
