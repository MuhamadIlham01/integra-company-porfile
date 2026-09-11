import { Building2, FileCheck, MapPin } from "lucide-react";

const LegalProfileSection = () => {
  return (
    <div
      className="p-px rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #6DB8D380, #1F5C8C40, transparent 70%)",
      }}
    >
      <div className="bg-white rounded-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg"
              style={{
                backgroundImage: "linear-gradient(135deg, #0D2C5A, #1F5C8C)",
              }}
            >
              <Building2 size={26} />
            </div>
            <div>
              <h4
                className="text-lg md:text-xl font-bold"
                style={{ color: "#0D2C5A" }}
              >
                PT Integra Mesin Global
              </h4>
              <div
                className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm mt-1.5"
                style={{ color: "#0D2C5A90" }}
              >
                <span className="flex items-center gap-1.5">
                  <FileCheck size={16} style={{ color: "#6DB8D3" }} />
                  NIB/API-U Terdaftar
                </span>
                <span className="hidden sm:inline" style={{ color: "#A8B4BE" }}>
                  |
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} style={{ color: "#6DB8D3" }} />
                  Bekasi, Jawa Barat
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{ color: "#1F5C8C", backgroundColor: "#6DB8D322" }}
            >
              Berbadan Hukum PT
            </span>
            <span
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{ color: "#1F5C8C", backgroundColor: "#6DB8D322" }}
            >
              Importir Resmi Terdaftar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProfileSection;
