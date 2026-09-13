import Footer from "../components/layout/Footer";
import AboutHeader from "../components/section/about-section/AboutHeader";
import LegalProfileSection from "../components/section/about-section/LegalProfileSection";
import AboutStorySection from "../components/section/about-section/AboutStorySection";
import CommitmentSection from "../components/section/about-section/CommitmentSection";
import WhyChooseUsSection from "../components/section/about-section/WhyChooseUsSection";
import VisionMissionSection from "../components/section/about-section/VisionMissionSection";
import AboutCTA from "../components/section/about-section/AboutCTA";
import NavBar from "../components/layout/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeader />
      <LegalProfileSection />
      <AboutStorySection />
      <CommitmentSection />
      <WhyChooseUsSection />
      <VisionMissionSection />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;
