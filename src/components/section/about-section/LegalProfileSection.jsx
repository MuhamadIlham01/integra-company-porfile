import { Building2, FileCheck, MapPin, BadgeCheck, Award } from "lucide-react";

const LegalProfileSection = () => {
  return (
    <div
      className="p-px rounded-2xl"
      style={{
        backgroundImage:
          "linear-gradient(120deg, #6DB8D380, #1F5C8C40, transparent 70%)",
      }}
    >
      <div className="bg-white rounded-2xl p-6 md:p-8 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-8 -top-8 w-40 h-40 rounded-full opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #0D2C5A 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />

        <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-900/20"
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{ color: "#1F5C8C", backgroundColor: "#6DB8D322" }}
            >
              <BadgeCheck size={13} />
              Berbadan Hukum PT
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full"
              style={{ color: "#1F5C8C", backgroundColor: "#6DB8D322" }}
            >
              <Award size={13} />
              Importir Resmi Terdaftar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalProfileSection;
