import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  category: "",
  message: "",
};

const categories = [
  "Cutting",
  "Forming",
  "Punching",
  "Finishing",
  "Spare Part",
  "Instalasi & Maintenance",
  "Lainnya",
];

const contactItems = [
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "+62 878 5218 3175",
    href: "https://wa.me/6287852183175",
  },
  {
    icon: Mail,
    label: "Email",
    value: "integramesinglobal@gmail.com",
    href: "mailto:integramesinglobal@gmail.com",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Bekasi, Jawa Barat",
    href: "https://maps.google.com/?q=Ruko+Niaga+Kalimas+Blok+B18+Tambun+Selatan",
  },
];

const ContactBox = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = [
      "Halo PT Integra Mesin Global,",
      "",
      "Saya ingin berkonsultasi mengenai pengadaan mesin:",
      "",
      `Nama PIC: ${formData.name}`,
      `Perusahaan: ${formData.company}`,
      `Email: ${formData.email}`,
      `Telepon: ${formData.phone}`,
      `Kategori: ${formData.category}`,
      "",
      "Pesan:",
      formData.message,
      "",
      "Terima kasih.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/6287852183175?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");

    setIsSubmitted(true);
    setFormData(initialForm);

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <div className="rounded-3xl border border-[#A8B4BE]/25 bg-white p-7 shadow-[0_18px_50px_rgba(13,44,90,0.08)] sm:p-10 lg:p-12">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
          FORMULIR KONTAK
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
          Kirim Permintaan Anda.
        </h2>
        <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600">
          Isi formulir di bawah ini, dan tim kami akan menghubungi Anda melalui
          WhatsApp atau email dalam 1×24 jam kerja.
        </p>
      </div>

      {/* INFO KONTAK - 3 kolom horizontal */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="group flex flex-col items-center gap-3 rounded-2xl border border-[#A8B4BE]/25 bg-[#F5F7F9] p-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F5C8C]/40 hover:bg-white hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5C8C]/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6DB8D3]/15 text-[#1F5C8C] transition-colors duration-300 group-hover:bg-[#1F5C8C] group-hover:text-white">
                <Icon size={19} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#A8B4BE]">
                  {item.label}
                </p>
                <p className="mt-1 wrap-break-words text-sm font-medium text-[#0D2C5A]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* DIVIDER */}
      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-[#A8B4BE]/30" />
        <span className="text-xs font-medium uppercase tracking-wider text-[#A8B4BE]">
          atau isi formulir
        </span>
        <div className="h-px flex-1 bg-[#A8B4BE]/30" />
      </div>

      {/* FORM */}
      {isSubmitted && (
        <div
          role="status"
          className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4"
        >
          <CheckCircle2
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-green-600"
            size={18}
          />
          <div>
            <p className="text-sm font-semibold text-green-800">
              Pesan Anda sedang dialihkan ke WhatsApp.
            </p>
            <p className="mt-1 text-xs text-green-700">
              Jika WhatsApp tidak terbuka otomatis, silakan hubungi kami
              langsung di +62 878 5218 3175.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Nama PIC <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
            />
          </div>

          <div>
            <label
              htmlFor="contact-company"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Nama Perusahaan <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nama perusahaan"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@perusahaan.com"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
            />
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="mb-1.5 block text-sm font-medium text-gray-700"
            >
              Nomor Telepon / WA
            </label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="08xx xxxx xxxx"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-category"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Kategori Kebutuhan <span className="text-red-500">*</span>
          </label>
          <select
            id="contact-category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
          >
            <option value="">Pilih kategori</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-gray-700"
          >
            Pesan / Detail Kebutuhan <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Contoh: Butuh fiber laser cutting untuk plat 6mm, kapasitas produksi 100 lembar/hari."
            rows={5}
            required
            className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#1F5C8C] focus:ring-4 focus:ring-[#1F5C8C]/15"
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F5C8C] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2C5A] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
        >
          <Send size={17} />
          Kirim via WhatsApp
        </button>

        <p className="text-center text-xs text-gray-500">
          Dengan mengirim formulir ini, Anda akan diarahkan ke WhatsApp kami
          dengan pesan yang sudah terisi otomatis.
        </p>
      </form>

      {/* FOOTER - jam operasional + WA button */}
      <div className="mt-8 flex flex-col items-center gap-5 border-t border-[#A8B4BE]/25 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
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
            <p className="mt-1 text-xs leading-5 text-gray-600">
              Senin–Jumat: 08.00–17.00 WIB
              <br />
              Sabtu: 08.00–13.00 WIB
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/6287852183175?text=Halo%20PT%20Integra%20Mesin%20Global%2C%20saya%20ingin%20konsultasi%20pengadaan%20mesin."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0D2C5A] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1F5C8C] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/40"
        >
          <MessageCircle size={16} />
          Chat WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactBox;
