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

  const {
    category,
    name,
    variant,
    description,
    image,
    specifications,
    features,
    suitableFor,
    recommendedFor,
  } = product;
  const productSuitableFor = suitableFor || recommendedFor;

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
        className="modal-panel-enter max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl lg:max-w-6xl"
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

        <div className="px-6 pb-8 sm:px-10 sm:pb-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
            <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl bg-[#F5F7F9]">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-contain p-3 sm:p-4"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <ImageOff aria-hidden="true" size={38} strokeWidth={1.2} />
                  <span className="text-sm">Product image not available</span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#1F5C8C]">
                {category}
              </p>
              <h2
                id="product-modal-title"
                className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#0D2C5A] sm:text-4xl"
              >
                {name}
              </h2>
              {variant && (
                <p className="mt-3 text-lg font-medium text-gray-500">
                  {variant}
                </p>
              )}
              <p className="mt-6 text-base leading-7 text-gray-600">
                {description}
              </p>
            </div>
          </div>

          {specifications && Object.keys(specifications).length > 0 && (
            <section className="mt-10 border-t border-gray-200 pt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">
                Spesifikasi Utama
              </h3>
              <dl className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                {Object.entries(specifications).map(([label, value]) => (
                  <div
                    key={label}
                    className="grid gap-1 py-3 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6"
                  >
                    <dt className="text-sm text-gray-500">{label}</dt>
                    <dd className="wrap-break-word text-sm font-medium text-gray-900 sm:text-right">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          {(features?.length > 0 || productSuitableFor) && (
            <section className="mt-10 grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-2">
              {features?.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">
                    Fitur Unggulan
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-gray-600"
                      >
                        <Check
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-[#1F5C8C]"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {productSuitableFor && (
                <div className="rounded-xl bg-[#F5F7F9] p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-900">
                    Cocok Untuk
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {productSuitableFor}
                  </p>
                </div>
              )}
            </section>
          )}

          <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Butuh informasi lebih lanjut?
            </p>
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#0D2C5A] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1F5C8C] focus:outline-none focus:ring-4 focus:ring-[#1F5C8C]/25"
            >
              Hubungi Sales <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailModal;
