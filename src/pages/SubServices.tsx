import Header from "../components/ui/Header";
import Footer from "@/components/ui/Footer";
import RecommendedServices from "@/components/ui/RecommendedServices";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <Header />
      
      <main className="container mx-auto px-4 pb-20 sm:pb-8">
        <div className="py-8 space-y-12">
          <RecommendedServices />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Services;
