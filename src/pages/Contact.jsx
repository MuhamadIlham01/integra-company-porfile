import Footer from "../components/layout/Footer";
import NavBar from "./../components/layout/NavBar";
import ContactBox from "../components/section/contact-section/ContactBox";
import ContactCTA from "../components/section/contact-section/ContactCTA";

const Contact = () => {
  return (
    <div>
      <NavBar />
      <main className="min-h-screen">
        <ContactBox />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
