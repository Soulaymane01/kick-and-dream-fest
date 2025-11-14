import Hero from "@/components/Hero";
import About from "@/components/About";
import ValueCards from "@/components/ValueCards";
import Participation from "@/components/Participation";
import EventHighlights from "@/components/EventHighlights";
import Registration from "@/components/Registration";
import Volunteer from "@/components/Volunteer";
import Sponsors from "@/components/Sponsors";
import EventDetails from "@/components/EventDetails";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <ValueCards />
      <Participation />
      <EventHighlights />
      <Registration />
      <Volunteer />
      <Sponsors />
      <EventDetails />
      <Footer />
    </div>
  );
};

export default Index;
