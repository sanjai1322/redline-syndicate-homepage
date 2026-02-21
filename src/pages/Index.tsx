import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedInventory from "@/components/FeaturedInventory";
import SignatureBuilds from "@/components/SignatureBuilds";
import PerformanceServices from "@/components/PerformanceServices";
import VisitGarage from "@/components/VisitGarage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedInventory />
        <SignatureBuilds />
        <PerformanceServices />
        <VisitGarage />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
