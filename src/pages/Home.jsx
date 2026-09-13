import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/NavBar";
import Hero from "../components/section/home-section/hero";
import IndustriesServed from "../components/section/home-section/IndustriesServed";
import ValueProposition from "../components/section/home-section/ValueProposition";
import SourcingWorkflow from "../components/section/home-section/SourcingWorkflow";
import QuotationBanner from "../components/section/home-section/QuotationBanner";
import MachineCategories from "../components/section/home-section/MachineCategories";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ValueProposition />
      <IndustriesServed />
      <MachineCategories />
      <SourcingWorkflow />
      <QuotationBanner />
      <Footer />
    </div>
  );
};

export default Home;
