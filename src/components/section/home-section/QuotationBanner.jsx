import React, { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const QuotationBanner = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    category: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo PT Integra Mesin Global,%0A%0ASaya ingin konsultasi pengadaan mesin:%0A%0ANama PIC: ${formData.name}%0APerusahaan: ${formData.company}%0AKategori Mesin: ${formData.category}%0ACatatan Kebutuhan: ${formData.notes}%0A%0ATerima kasih.`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: "#284b70" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Konsultasi Gratis
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Konsultasi Teknis Pengadaan Mesin
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Dapatkan rekomendasi mesin yang tepat sesuai kebutuhan produksi
              Anda. Tim teknis kami siap membantu analisis spesifikasi dan
              memberikan penawaran yang transparan.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white">
                <Phone size={18} className="text-cyan-400" />
                <span className="text-sm">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Mail size={18} className="text-cyan-400" />
                <span className="text-sm">info@integramesin.co.id</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <MapPin size={18} className="text-cyan-400" />
                <span className="text-sm">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-navy-700 mb-4">
              Kirim Permintaan Kuotasi
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nama PIC
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama lengkap"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nama perusahaan"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Kategori Mesin
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition bg-white"
                  required
                >
                  <option value="">Pilih kategori mesin</option>
                  <option value="Cutting">Cutting</option>
                  <option value="Forming">Forming</option>
                  <option value="Punching">Punching</option>
                  <option value="Finishing">Finishing</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Catatan Kebutuhan
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Misal: plat tebal 10mm, kapasitas 100 ton, dll."
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Kirim ke WhatsApp Business
              </button>
              <p className="text-xs text-slate-500 text-center mt-2">
                Tim kami akan merespon dalam 1x24 jam kerja
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuotationBanner;
