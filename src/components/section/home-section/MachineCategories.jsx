import { useState } from "react";
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
    <section className="bg-[#F5F7F9]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 text-left sm:mb-12">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
            Lini Produk
          </span>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0D2C5A] sm:text-3xl">
            Mesin Fabrikasi Logam & Sheet Metal
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Pilih kategori mesin sesuai kebutuhan produksi Anda dari 4 lini
            utama proses fabrikasi.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${
                  isActive
                    ? "bg-[#0D2C5A] text-white shadow-md hover:bg-[#1F5C8C] active:bg-[#0D2C5A]"
                    : "bg-white text-gray-600 hover:bg-[#F5F7F9] hover:text-[#0D2C5A] active:bg-gray-100"
                }`}
              >
                <span className={isActive ? "text-white" : "text-[#1F5C8C]"}>
                  {category.icon}
                </span>
                <span className={isActive ? "text-white" : "text-[#0D2C5A]"}>
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {activeMachines.map((machine) => (
            <div
              key={machine.id}
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-[#6DB8D3] hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="rounded-full bg-[#F5F7F9] px-3 py-1 text-xs font-semibold text-[#1F5C8C]">
                  {machine.category}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-[#0D2C5A]">
                {machine.name}
              </h3>
              <ul className="space-y-1.5 mb-4">
                {machine.specs.map((spec, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="mt-0.5 text-[#1F5C8C]">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-[#1F5C8C] transition-colors hover:text-[#0D2C5A]">
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
