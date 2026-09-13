import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

const ProductShowcaseCarousel = ({ products, onSelect }) => {
  const viewportRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(products.length);
  const [isPaused, setIsPaused] = useState(false);
  const loopedProducts = useMemo(
    () => [...products, ...products, ...products],
    [products],
  );

  const updateCurrentIndex = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
    const closestIndex = loopedProducts.reduce((closest, _, index) => {
      const slide = viewport.children[index];
      if (!slide) return closest;

      const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
      const closestSlide = viewport.children[closest];
      const closestCenter =
        closestSlide.offsetLeft + closestSlide.offsetWidth / 2;

      return Math.abs(slideCenter - viewportCenter) <
        Math.abs(closestCenter - viewportCenter)
        ? index
        : closest;
    }, 0);

    setCurrentPosition(closestIndex);
    setCurrentIndex(closestIndex % products.length);
  }, [loopedProducts, products.length]);

  const scrollToPosition = useCallback((position, behavior = "smooth") => {
    const viewport = viewportRef.current;
    const slide = viewport?.children[position];
    if (!viewport || !slide) return;

    viewport.scrollTo({
      left: slide.offsetLeft - (viewport.clientWidth - slide.offsetWidth) / 2,
      behavior,
    });
  }, []);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      scrollToPosition(products.length, "auto");
      updateCurrentIndex();
    });
    window.addEventListener("resize", updateCurrentIndex);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", updateCurrentIndex);
    };
  }, [products.length, scrollToPosition, updateCurrentIndex]);

  const moveCarousel = useCallback(
    (direction) => {
      if (products.length < 2) return;

      const nextPosition = currentPosition + direction;
      setCurrentPosition(nextPosition);
      scrollToPosition(nextPosition);

      window.setTimeout(() => {
        if (nextPosition >= products.length * 2) {
          const normalizedPosition =
            products.length + (nextPosition % products.length);
          setCurrentPosition(normalizedPosition);
          scrollToPosition(normalizedPosition, "auto");
        }

        if (nextPosition < products.length) {
          const normalizedPosition = products.length * 2 - 1;
          setCurrentPosition(normalizedPosition);
          scrollToPosition(normalizedPosition, "auto");
        }
      }, 550);
    },
    [currentPosition, products.length, scrollToPosition],
  );

  useEffect(() => {
    if (isPaused || products.length < 2) return undefined;

    const intervalId = window.setInterval(() => moveCarousel(1), 5000);
    return () => window.clearInterval(intervalId);
  }, [isPaused, moveCarousel, products.length]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveCarousel(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveCarousel(1);
    }
  };

  return (
    <section
      className="border-y border-[#A8B4BE]/25 bg-[#F5F7F9]"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#1F5C8C]">
              PRODUK PILIHAN
            </p>
            <h2
              id="showcase-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-[#0D2C5A] sm:text-4xl"
            >
              Jelajahi Produk Kami
            </h2>
            <p className="mt-4 text-base leading-7 text-[#A8B4BE]">
              Temukan berbagai mesin industri kami yang dirancang untuk memenuhi
              beragam kebutuhan produksi.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              disabled={products.length < 2}
              aria-label="Previous showcased product"
              className="rounded-full border border-[#A8B4BE]/50 bg-white p-2.5 text-[#0D2C5A] transition-colors hover:border-[#1F5C8C] hover:text-[#1F5C8C] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/30 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              disabled={products.length < 2}
              aria-label="Next showcased product"
              className="rounded-full border border-[#A8B4BE]/50 bg-white p-2.5 text-[#0D2C5A] transition-colors hover:border-[#1F5C8C] hover:text-[#1F5C8C] focus:outline-none focus:ring-4 focus:ring-[#6DB8D3]/30 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        <div
          ref={viewportRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onScroll={updateCurrentIndex}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-label="Featured products"
          className="carousel-scrollbar-hidden -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8%] py-6 outline-none focus-visible:ring-4 focus-visible:ring-[#6DB8D3]/30 sm:-mx-8 sm:px-[12.5%] lg:-mx-10 lg:px-0"
        >
          {loopedProducts.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="w-[84%] shrink-0 snap-center sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.835rem)]"
            >
              <ProductCard product={product} onSelect={onSelect} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span
            className="text-sm font-medium tracking-wide text-[#A8B4BE]"
            aria-live="polite"
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(products.length).padStart(2, "0")}
          </span>
          <span className="text-xs text-[#A8B4BE] sm:hidden">
            Swipe to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseCarousel;
