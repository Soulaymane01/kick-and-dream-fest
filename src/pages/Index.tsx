import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueCards from "@/components/ValueCards";
/*import Participation from "@/components/Participation";
import EventHighlights from "@/components/EventHighlights";
import Registration from "@/components/Registration";
import Volunteer from "@/components/Volunteer";
import Sponsors from "@/components/Sponsors";
import EventDetails from "@/components/EventDetails";*/
import Footer from "@/components/Footer";
import Shop from "@/components/shop";

import Navbar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero />
      <About />
      <ValueCards />
      <Shop />
      <Footer />
    </div>
  );
};

export default Index;
