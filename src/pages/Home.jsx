import { useState } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import Hero from "../components/section/home-section/Hero";
import IndustriesServed from "../components/section/home-section/IndustriesServed";
import ValueProposition from "../components/section/home-section/ValueProposition";
import SourcingWorkflow from "../components/section/home-section/SourcingWorkflow";
import QuotationBanner from "../components/section/home-section/QuotationBanner";
import ProductDetailModal from "../components/section/product-section/ProductDetailModal";
import ProductShowcaseCarousel from "../components/section/product-section/ProductShowcaseCarousel";
import products from "../data/products";

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <Navbar />
      <Hero />
      <main className="min-h-screen bg-[#F5F7F9] text-gray-900">
        <ValueProposition />
        <IndustriesServed />
        <ProductShowcaseCarousel
          products={products}
          onSelect={setSelectedProduct}
        />
        <SourcingWorkflow />
        <QuotationBanner />
      </main>
      <Footer />
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Home;
