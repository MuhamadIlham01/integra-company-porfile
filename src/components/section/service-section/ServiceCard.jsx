import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ number, icon: Icon, title, description, image }) => {
  return (
    <article
      className="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-cover bg-center p-7 text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#6DB8D3] hover:shadow-[0_18px_40px_rgba(13,44,90,0.2)] focus-within:-translate-y-1 focus-within:border-[#6DB8D3] focus-within:shadow-[0_18px_40px_rgba(13,44,90,0.2)] sm:p-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[#071827]/70 transition-colors duration-300 group-hover:bg-[#071827]/55" />

      <div className="relative z-10 flex items-start justify-between">
        <span className="text-5xl font-light tracking-tight text-[#F5F7F9]/80 transition-colors duration-300 group-hover:text-[#6DB8D3]">
          {number}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-[#6DB8D3] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#6DB8D3] group-hover:bg-[#6DB8D3]/10">
          <Icon aria-hidden="true" size={21} strokeWidth={1.6} />
        </span>
      </div>

      <div className="relative z-10 mt-12">
        <h2 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-[#F5F7F9]/85">
          {description}
        </p>
      </div>

      <ArrowUpRight
        aria-hidden="true"
        className="absolute bottom-7 right-7 z-10 translate-y-2 text-[#6DB8D3] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        size={22}
        strokeWidth={1.7}
      />
    </article>
  );
};

export default ServiceCard;