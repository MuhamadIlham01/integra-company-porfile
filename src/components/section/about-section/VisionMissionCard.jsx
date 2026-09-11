const VisionMissionCard = ({ icon, label, title, description, tone }) => {
  const isNavy = tone === "navy";

  return (
    <div
      className="group relative rounded-2xl p-7 md:p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
      style={{
        backgroundImage: isNavy
          ? "linear-gradient(135deg, #0D2C5A, #1F5C8C)"
          : "linear-gradient(135deg, #1F5C8C, #6DB8D3)",
      }}
    >
      <div className="absolute -right-6 -bottom-8 opacity-[0.12] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 text-white [&_svg]:w-35 [&_svg]:h-35">
        {icon}
      </div>

      <div className="relative">
        <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-5 bg-white/15 backdrop-blur-sm text-white">
          {icon}
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
          {label}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-3">
          {title}
        </h3>
        <p className="text-sm md:text-[0.95rem] leading-relaxed text-white/85">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VisionMissionCard;
