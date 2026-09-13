import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import ProductCard from "../components/section/product-section/ProductCard";
import ProductDetailModal from "../components/section/product-section/ProductDetailModal";
import ProductShowcaseCarousel from "../components/section/product-section/ProductShowcaseCarousel";
import products from "../data/products";
import productsHero from "../assets/products.jpeg";

const categories = ["ALL", "CUTTING", "FORMING", "PUNCHING", "FINISHING"];
const productsPerPage = 6;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const visibleProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  const totalPages = Math.ceil(visibleProducts.length / productsPerPage);
  const paginatedProducts = visibleProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage,
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <div>
      <NavBar />
      <main className="min-h-screen bg-[#F5F7F9] text-gray-900">
        <section
          className="relative isolate overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${productsHero})` }}
        >
          <div className="absolute inset-0 -z-10 bg-[#071827]/70" />
          <div className="mx-auto flex min-h-120 max-w-7xl items-end px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold tracking-[0.24em] text-orange-200">
                PRODUK KAMI
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Mesin Industri untuk Kebutuhan Produksi Anda.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
                Jelajahi rangkaian mesin industri kami untuk berbagai kebutuhan
                cutting, forming, punching, dan finishing.
              </p>
            </div>
          </div>
        </section>

        <ProductShowcaseCarousel
          products={products}
          onSelect={setSelectedProduct}
        />

        <section className="border-y border-gray-200 bg-[#F5F7F9]">
          <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
            <div
              className="flex gap-2 overflow-x-auto pb-1"
              role="tablist"
              aria-label="Product categories"
            >
              {categories.map((category) => {
                const isSelected = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleCategoryChange(category)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-[#1F5C8C]/15 ${
                      isSelected
                        ? "border-[#0D2C5A] bg-[#0D2C5A] text-white"
                        : "border-gray-200 bg-white text-gray-500 hover:border-[#1F5C8C]/50 hover:text-[#1F5C8C]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl bg-[#F5F7F9] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-end justify-between gap-6 sm:mb-12">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Katalog Produk
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                {selectedCategory === "ALL"
                  ? "All machinery"
                  : selectedCategory}
              </h2>
            </div>
            <span className="text-sm text-gray-400">
              {visibleProducts.length.toString().padStart(2, "0")} produk
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              className="mt-10 flex items-center justify-center gap-2"
              aria-label="Product pages"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((page) => page - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-[#1F5C8C]/50 hover:text-[#1F5C8C] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft aria-hidden="true" size={20} />
              </button>

              <span className="px-3 text-sm text-gray-500" aria-live="polite">
                Page {currentPage} of {totalPages}
              </span>

              <button
                type="button"
                onClick={() => setCurrentPage((page) => page + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="rounded-lg border border-gray-200 p-2 text-gray-600 transition-colors hover:border-[#1F5C8C]/50 hover:text-[#1F5C8C] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronRight aria-hidden="true" size={20} />
              </button>
            </nav>
          )}
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-10 lg:pb-28">
          <div className="flex flex-col justify-between gap-8 rounded-2xl bg-[#0D2C5A] px-7 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:px-14">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Butuh Bantuan Memilih Mesin yang Tepat?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                Konsultasikan kebutuhan produksi Anda bersama tim kami untuk menemukan solusi mesin yang sesuai.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0D2C5A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Hubungi Kami <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
