import React, { useState } from "react";
import { Scissors, Hammer, Drill, SprayCan, ChevronRight } from "lucide-react";

const MachineCategories = () => {
  const [activeCategory, setActiveCategory] = useState("cutting");

  const categories = [
    {
      id: "cutting",
      label: "CUTTING",
      icon: <Scissors size={20} />,
      machines: [
        {
          id: "cutting-1",
          name: "Fiber Laser Cutting Series",
          specs: [
            "TF3015 EDGE 500W",
            "TF3015E 700W",
            "TF EDGE 1000W",
            "Opsi Tube Laser",
          ],
          category: "CUTTING",
        },
        {
          id: "cutting-2",
          name: "CNC Water Jet Cutting",
          specs: [
            "HTWJ-3038-L3016",
            "Pemotongan dingin presisi tinggi untuk plat tebal, stainless, komposit",
          ],
          category: "CUTTING",
        },
        {
          id: "cutting-3",
          name: "CNC Thin Sheet Notch Cutter / V-Grooving RKC",
          specs: ["Aplikasi dekorasi arsitektur & kabinet"],
          category: "CUTTING",
        },
      ],
    },
    {
      id: "forming",
      label: "FORMING",
      icon: <Hammer size={20} />,
      machines: [
        {
          id: "forming-1",
          name: "ATmac Hydraulic Pressbrake",
          specs: [
            "30 - 400 Ton",
            "Sistem hidrolik Bosch/First",
            "Kontrol Schneider/Siemens",
          ],
          category: "FORMING",
        },
        {
          id: "forming-2",
          name: "Upper Roller Universal Plate Rolling W11S",
          specs: [
            "3-roller hidrolik",
            "Pre-bending otomatis untuk tangki & silinder",
          ],
          category: "FORMING",
        },
        {
          id: "forming-3",
          name: "Roof & Wall Forming Machine",
          specs: ["Panel atap/dinding 773 & 445", "Kontrol DELTA PLC"],
          category: "FORMING",
        },
      ],
    },
    {
      id: "punching",
      label: "PUNCHING",
      icon: <Drill size={20} />,
      machines: [
        {
          id: "punching-1",
          name: "CNC Turret Punch MP Series",
          specs: [
            "MP7-30 s/d MP10-50",
            "24-32 station",
            "Kontrol Fanuc 0i-P",
            "Hidrolik H+L Jerman",
          ],
          category: "PUNCHING",
        },
        {
          id: "punching-2",
          name: "Iron Worker Machine Q35Y Series",
          specs: [
            "Punching, shearing, angle/flat bar cutting",
            "Notching multi-fungsi",
          ],
          category: "PUNCHING",
        },
      ],
    },
    {
      id: "finishing",
      label: "FINISHING",
      icon: <SprayCan size={20} />,
      machines: [
        {
          id: "finishing-1",
          name: "Hydraulic Shearing Machine",
          specs: [
            "QC11Y Series",
            "Sertifikasi CE TüV Jerman",
            "Touch screen CNC",
          ],
          category: "FINISHING",
        },
        {
          id: "finishing-2",
          name: "Bandsaw Machine 4028B / GZ4240",
          specs: [
            "Hydraulic clamping otomatis",
            "Untuk raw material bulat & persegi",
          ],
          category: "FINISHING",
        },
        {
          id: "finishing-3",
          name: "Two-Step Dished End Forming & Flanging Machine",
          specs: [
            "Drum press 3500 kN + flanging",
            "Untuk tangki & bejana tekan",
          ],
          category: "FINISHING",
        },
      ],
    },
  ];

  const activeMachines =
    categories.find((cat) => cat.id === activeCategory)?.machines || [];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">
            Lini Produk
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mt-2 mb-4">
            Mesin Fabrikasi Logam & Sheet Metal
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Pilih kategori mesin sesuai kebutuhan produksi Anda dari 4 lini
            utama proses fabrikasi.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#1e3a5f] text-white shadow-md hover:bg-[#1e3a5f] active:bg-[#162c48]"
                    : "bg-gray-100 text-slate-600 hover:bg-gray-200 hover:text-slate-700 active:bg-gray-300"
                }`}
              >
                <span className={isActive ? "text-white" : "text-slate-600"}>
                  {category.icon}
                </span>
                <span className={isActive ? "text-white" : "text-slate-600"}>
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeMachines.map((machine) => (
            <div
              key={machine.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                  {machine.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-navy-700 mb-3">
                {machine.name}
              </h3>
              <ul className="space-y-1.5 mb-4">
                {machine.specs.map((spec, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-0.5">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-1 text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors">
                Konsultasi Spesifikasi & Kuotasi
                <ChevronRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MachineCategories;
