import Footer from "../components/layout/Footer";
import AboutHeader from "../components/section/about-section/AboutHeader";
import LegalProfileSection from "../components/section/about-section/LegalProfileSection";
import VisionMissionSection from "../components/section/about-section/VisionMissionSection";
import NavBar from "../components/layout/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <LegalProfileSection />
      <VisionMissionSection />
      <Footer />
    </div>
  );
};

export default About;
