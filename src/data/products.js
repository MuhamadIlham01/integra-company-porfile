import cutting1Image from "../assets/products/cutting1.jpg";
import cutting2Image from "../assets/products/cutting1.jpg";
import cutting3Image from "../assets/products/cutting3.jpg";
import cutting4Image from "../assets/products/cutting4.jpg";
import cutting5Image from "../assets/products/cutting5.jpg";
import forming1Image from "../assets/products/forming1.jpg";
import forming2Image from "../assets/products/forming2.jpg";
import forming3Image from "../assets/products/forming3.jpg";
import punching1Image from "../assets/products/punching1.jpg";
import punching2Image from "../assets/products/punching2.jpg";
import finishing1Image from "../assets/products/finishing1.jpg";
import finishing2Image from "../assets/products/finishing2.jpg";
import finishing3Image from "../assets/products/finishing3.jpg";

const products = [
  {
    id: "tf3015-edge",
    category: "CUTTING",
    name: "TF3015 EDGE",
    variant: "Fiber Laser 500W",
    description:
      "Solusi cutting presisi untuk mild steel & stainless steel dengan biaya operasional rendah.",
    image: cutting1Image,
    specifications: {
      "Cutting Area": "3000 × 1500 mm",
      "Max Thickness": "6mm Mild Steel / 3mm Stainless",
      "Laser Source": "IPG / Feibo 500W",
      "Position Speed": "80 m/min",
      "Akurasi Posisi": "0.05 mm",
      "Power Requirement": "13.8 kW",
    },
    features: [
      "Height Follow-up otomatis",
      "Auto Edge-Finding",
      "Dust collection system",
      "Fireproof cover semua axis",
    ],
    recommendedFor: "Bengkel fabrikasi, workshop metal kecil-menengah",
  },
  {
    id: "tf3015e",
    category: "CUTTING",
    name: "TF3015E",
    variant: "Fiber Laser 700W",
    description:
      "Kapasitas cutting lebih tebal dengan tetap menjaga presisi dan efisiensi produksi",
    image: cutting2Image,
    specifications: {
      "Cutting Area": "3000 × 1500 mm",
      "Max Thickness": "8mm Mild Steel / 4mm Stainless",
      "Laser Source": "IPG 700W",
      "Position Speed": "50 m/min",
      "Garansi": "12 bulan sejak B/L",
      "Power Requirement": "15 kW",
    },
    features: [
      "Breakpoint return",
      "Multi piercing mode",
      "CNC touch screen controller",
      "Auto lubrication system",
    ],
    recommendedFor: "Manufaktur skala menengah, volume produksi lebih tinggi",
  },
  {
    id: "tf-edge",
    category: "CUTTING",
    name: "TF EDGE",
    variant: "Fiber Laser 1000W",
    description:
      "Daya potong maksimal untuk plat tebal, tersedia opsi tube laser device",
    image: cutting3Image,
    specifications: {
      "Working Area": "3015 / 4020 / 6020 mm",
      "Max Thickness (1000W) ": "12mm Mild Steel / 6mm Stainless",
      "Laser Power": "500W - 1200W (varian)",
      "Position Speed": "80 m/min",
      "Opsi Tambahan": "Tube Laser Device (Ø30-220mm)",
    },
    features: [
      "Leapfrog function",
      "Marking function",
      "Auto edge-finding",
      "Common line cutting",
    ],
    recommendedFor: "Produksi berat, plat tebal & kebutuhan tube cutting",
  },
  {
    id: "htwj-3038-l3016",
    category: "CUTTING",
    name: "CNC Water Jet Cutting",
    variant: "HTWJ-3038-L3016",
    description: "Cutting presisi tanpa panas untuk berbagai jenis material.",
    image: cutting4Image,
    specifications: {
      "Cutting Area": "3000 × 1600 mm",
      "Max Pressure": "380 MPa",
      "Akurasi Cutting": "±0.1 mm",
      "Kontrol": "NAIKY PCIMC-6A",
      "Servo": "Mitsubishi AC Servo",
    },
    features: [
      "Auto abrasive feeding (opsional)",
      "Komponen intensifier import USA",
      "Cocok material tebal & sensitif panas",
    ],
    recommendedFor: "Material tebal, stainless, granit, komposit",
  },
  {
    id: "rkc",
    category: "CUTTING",
    name: "CNC Thin Sheet Notch Cutter",
    variant: "(V-Grooving) RKC",
    description:
      "Solusi V-grooving presisi untuk industri dekorasi & konstruksi metal.",
    image: cutting5Image,
    specifications: {
      "Ketebalan Plat": "0.6 - 4 mm",
      "Ukuran Plat": "2500 x 1220 mm",
      "Kontrol CNC": "Taiwan PUTNC-H4-2",
      "Servo Motor": "Delta 1KW",
      "Max Groove Depth": "2.5 mm",
    },
    features: [
      "Cutting speed 15-60 m/min",
      "Fog lubrication cooling",
      "Presisi tinggi industri dekorasi",
    ],
    recommendedFor: "Kitchen set metal, cabinet, dekorasi arsitektur",
  },
  {
    id: "atmac-hydraulic-pressbrake",
    category: "FORMING",
    name: "ATmac Hydraulic Pressbrake",
    variant: "",
    description:
      "Tersedia 21 varian tonase (30-400 Ton) untuk kebutuhan bending presisi.",
    image: forming1Image,
    specifications: {
      "Range Tonase": "30 Ton - 400 Ton",
      "Panjang Table": "1300 - 4000 mm",
      "Sistem Hidrolik": "Bosch (Jerman) / First (USA)",
      "Sistem Elektrik": "Schneider / Siemens",
      "Contoh Model ": "WC67Y-250/3200",
    },
    features: [
      "Mechanical stop nuts presisi tinggi",
      "Back gauge motorized + fine adjust",
      "Deflection compensation di atas 250 Ton",
    ],
    recommendedFor: "Bending plat & konstruksi baja ringan-berat",
  },
  {
    id: "w11s",
    category: "FORMING",
    name: "Upper Roller Universal Plate Rolling",
    variant: "W11S",
    description:
      "Mesin rolling plat 3-roller hidrolik untuk hasil rounding presisi tinggi.",
    image: forming2Image,
    specifications: {
      "Max Lebar Plat": "2500 mm",
      "Pressure": "130 Ton",
      "Max Thickness (Pre-bending)": "16 mm",
      "Max Thickness (Normal Rolling) ": "20 mm",
      "Main Motor": "15 KW",
    },
    features: [
      "Pre-bending asimetris otomatis",
      "Rear bending system presisi tinggi",
      "Support brand Siemens & OMRON",
    ],
    recommendedFor: "Tangki, pipa besar, konstruksi silinder",
  },
  {
    id: "roof-wall-forming",
    category: "FORMING",
    name: "Roof & Wall Forming Machine",
    variant: "",
    description:
      "Produksi panel atap & dinding metal dengan kecepatan dan presisi tinggi",
    image: forming3Image,
    specifications: {
      "Profile": "773 & 445 (roof & wall panel)",
      "Material Frame": "300H Steel",
      "Kecepatan Produksi": "10 m/min",
      "Kontrol": "DELTA PLC + Encoder",
      "Motor Power": "5.5 kW",
    },
    features: [
      "Manual decoiler kapasitas 5T",
      "Automatic cutting system",
      "Touch screen computer controller",
    ],
    recommendedFor: "Produsen atap & dinding metal bangunan",
  },
  {
    id: "q35y-series",
    category: "PUNCHING",
    name: "Iron Worker Machine",
    variant: "Q35Y Series",
    description:
      "Mesin multi-fungsi: punching, shearing, notching dalam satu unit.",
    image: punching1Image,
    specifications: {
      "Varian": "Q35Y-16 / 20 / 25 / 30",
      "Working Pressure": "600 - 1400 KN",
      "Max Cutting Thickness": "16 - 26 mm",
      "Main Motor": "4 - 11 KW",
    },
    features: [
      "Pipe notching & punching",
      "Flat bar bending",
      "Angle & round bar shear",
      "V-notching",
    ],
    recommendedFor: "Bengkel konstruksi baja serba guna",
  },
  {
    id: "mp-series",
    category: "PUNCHING",
    name: "CNC Turret Punch",
    variant: "MP Series",
    description:
      "Turret punching CNC presisi tinggi dengan kecepatan produksi maksimal.",
    image: punching2Image,
    specifications: {
      "Varian": "MP7-30 s/d MP10-50 (15 model)",
      "Working Pressure": "300 - 500 KN",
      "Ukuran Sheet": "1250x2500 - 1500x5000mm",
      "Turret Station": "24 - 32 station",
      "Kontrol CNC": "Fanuc 0i-P",
      "Kecepatan Max": "600 hpm",
    },
    features: [
      "Sistem hidrolik German H+L",
      "Auto tool managing & fault diagnosis",
      "Ball screw & linear guide presisi tinggi",
    ],
    recommendedFor: "Produksi massal komponen sheet metal",
  },
  {
    id: "atmac-hydraulic-shearing",
    category: "FINISHING",
    name: "ATmac Hydraulic Shearing Machine",
    variant: "",
    description:
      "14 varian ukuran dengan kontrol CNC touch screen, tersertifikasi CE.",
    image: finishing1Image,
    specifications: {
      "Range Ukuran": "QC11Y-6x2500 s/d QC11Y-20x3200",
      "Shear Angle": "0.5 - 3 derajat",
      "Back-Gauge Range": "20 - 1000 mm",
      "Sertifikasi": "CE (TuV Jerman)",
      "Kontrol": "CNC Touch Screen",
    },
    features: [
      "Konstruksi welded steel plate rigid",
      "Back-gauge & blade gap adjustable presisi",
      "Operasi sederhana & efisien",
    ],
    recommendedFor: "Pemotongan plat presisi tinggi volume besar",
  },
  {
    id: "4028b-gz4240",
    category: "FINISHING",
    name: "Bandsaw Machine",
    variant: "4028B (GZ4240)",
    description:
      "Pemotongan material bulat & persegi dengan hydraulic clamping otomatis.",
    image: finishing2Image,
    specifications: {
      "Cutting Capacity": "400mm bulat / 400x500mm persegi",
      "Saw Blade Speed": "25/46/68 m/min",
      "Motor Power": "4 kW",
      "Clamping": "Hydraulic otomatis",
      "Oil Tank": "75 L",
    },
    features: [
      "Automatic feeding 400mm",
      "Feeding accuracy 0.2mm/kali",
      "Transmisi worm & gear",
    ],
    recommendedFor: "Pemotongan raw material sebelum proses lanjutan",
  },
  {
    id: "dished-end-forming",
    category: "FINISHING",
    name: "Two-Step Dished End Forming & Flanging",
    variant: "",
    description:
      "Solusi lengkap pembentukan dished end untuk tangki & bejana tekan.",
    image: finishing3Image,
    specifications: {
      "Diameter Hasil": "800 - 3000 mm",
      "Max Ketebalan": "16mm Carbon / 8mm Stainless",
      "Nominal Force": "3500 kN (drum press)",
      "Kontrol": "PLC Omron (Jepang)",
      "Bentuk": "Ellipse, dish, taper, sphericity",
    },
    features: [
      "2-step process: drum pressing + flanging",
      "Manipulator otomatis untuk workpiece",
      "Cocok produksi tangki & bejana tekan",
    ],
    recommendedFor: "Produsen tangki, bejana tekan, dished end",
  },
];

export default products;
