import { useEffect } from "react";
import { ArrowRight, Check, ImageOff, X } from "lucide-react";
import { Link } from "react-router";

const ProductDetailModal = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const { category, name, variant, description, image, specifications, features, recommendedFor } = product;

  return (
    <div
      className="modal-backdrop-enter fixed inset-0 z-50 flex items-end justify-center bg-gray-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        className="modal-panel-enter max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:max-w-5xl sm:rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex justify-end bg-white/95 p-4 backdrop-blur sm:p-5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#1F5C8C]/15"
          >
            <X aria-hidden="true" size={22} />
          </button>
        </div>

        <div className="grid gap-8 px-6 pb-8 sm:px-10 sm:pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="flex aspect-4/3 min-h-56 items-center justify-center overflow-hidden rounded-xl bg-[#f4f6f8] p-0 lg:sticky lg:top-20 lg:aspect-square lg:h-fit">
            {image ? (
              <img src={image} alt={name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <ImageOff aria-hidden="true" size={38} strokeWidth={1.2} />
                <span className="text-sm">Product image not available</span>
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#1F5C8C]">{category}</p>
            <h2 id="product-modal-title" className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-gray-950 sm:text-4xl">
              {name}
            </h2>
            {variant && <p className="mt-3 text-lg font-medium text-gray-500">{variant}</p>}
            <p className="mt-6 text-base leading-7 text-gray-600">{description}</p>

            {specifications?.length > 0 && (
              <div className="mt-9">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">Specifications</h3>
                <dl className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                  {specifications.map(({ label, value }) => (
                    <div key={label} className="grid gap-2 py-3 sm:grid-cols-2">
                      <dt className="text-sm text-gray-500">{label}</dt>
                      <dd className="text-sm font-medium text-gray-900 sm:text-right">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {features?.length > 0 && (
              <div className="mt-9">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">Features</h3>
                <ul className="mt-4 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-gray-600">
                      <Check aria-hidden="true" className="mt-1 shrink-0 text-[#1F5C8C]" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {recommendedFor && (
              <p className="mt-8 border-l-2 border-[#1F5C8C] pl-4 text-sm leading-6 text-gray-600">
                <span className="font-semibold text-gray-900">Recommended For: </span>
                {recommendedFor}
              </p>
            )}

            <Link
              to="/contact"
              onClick={onClose}
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0D2C5A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1F5C8C] focus:outline-none focus:ring-4 focus:ring-[#1F5C8C]/25"
            >
              Contact Sales <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailModal;
