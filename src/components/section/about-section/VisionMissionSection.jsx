// VisionMissionSection.jsx
import { Eye, Target } from "lucide-react";
import VisionMissionCard from "./VisionMissionCard";

const items = [
  {
    type: "vision",
    label: "Visi",
    title: "Visi Kami",
    description:
      "Menjadi mitra terpercaya dalam pengadaan mesin fabrikasi logam yang mendorong kemandirian dan daya saing industri manufaktur Indonesia di tingkat global.",
    icon: <Eye size={22} />,
    tone: "navy",
  },
  {
    type: "mission",
    label: "Misi",
    title: "Misi Kami",
    description:
      "Menyediakan akses mesin presisi berkualitas internasional dengan proses impor yang legal, transparan, dan didukung oleh layanan teknis lokal yang handal.",
    icon: <Target size={22} />,
    tone: "blue",
  },
];

const VisionMissionSection = () => {
  return (
    <section
      aria-label="Visi dan Misi"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
    >
      {items.map((item) => (
        <VisionMissionCard key={item.type} {...item} />
      ))}
    </section>
  );
};

export default VisionMissionSection;
