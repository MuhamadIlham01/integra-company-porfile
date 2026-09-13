import { Cog, Wrench, Settings, ShieldCheck } from "lucide-react";
import machineImage from "../assets/services/machine.jpeg";
import sparePartImage from "../assets/services/sparepart.jpeg";
import installationImage from "../assets/services/instalasi.jpeg";
import maintenanceImage from "../assets/services/maintenance.jpeg";

const services = [
  {
    number: "01",
    icon: Cog,
    image: machineImage,
    title: "Mesin Industri",
    description:
      "Menyediakan berbagai mesin industri untuk mendukung kebutuhan dan proses produksi Anda.",
  },
  {
    number: "02",
    icon: Wrench,
    image: sparePartImage,
    title: "Spare Part Mesin",
    description:
      "Menyediakan spare part mesin untuk membantu menjaga performa dan kelancaran operasional.",
  },
  {
    number: "03",
    icon: Settings,
    image: installationImage,
    title: "Instalasi Mesin",
    description:
      "Layanan pemasangan dan instalasi mesin untuk memastikan mesin siap digunakan secara optimal.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    image: maintenanceImage,
    title: "Maintenance",
    description:
      "Layanan pemeliharaan mesin untuk membantu menjaga performa dan keandalan operasional.",
  },
];

export default services;
