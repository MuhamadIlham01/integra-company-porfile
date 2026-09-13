import { ArrowUpRight, ImageOff } from "lucide-react";

const ProductCard = ({ product, onSelect }) => {
  const { category, name, variant, description, image } = product;

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#1F5C8C]/40 hover:shadow-[0_18px_40px_rgba(13,44,90,0.1)] focus:outline-none focus:ring-4 focus:ring-[#1F5C8C]/15"
    >
      <div className="flex aspect-4/3 items-center justify-center overflow-hidden border-b border-gray-100 bg-[#f4f6f8] p-0">
        {image ? (
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-gray-400">
            <ImageOff aria-hidden="true" size={32} strokeWidth={1.3} />
            <span className="text-xs tracking-wide">Image coming soon</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#1F5C8C]">
          {category}
        </p>
        <h2 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-gray-900">
          {name}
        </h2>
        {variant && (
          <p className="mt-1 text-sm font-medium text-gray-500">{variant}</p>
        )}
        <p className="mt-4 flex-1 text-sm leading-6 text-gray-600">
          {description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1F5C8C]">
          Lihat Detail
          <ArrowUpRight
            aria-hidden="true"
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </button>
  );
};

export default ProductCard;
