import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ServiceTypeCards from "@/components/ServiceTypeCards";
import LocationSelector from "@/components/LocationSelector";
import CategoryGrid from "@/components/CategoryGrid";
import RecommendedServices from "@/components/RecommendedServices";
import TopRatedCategories from "@/components/TopRatedCategories";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/30 to-background">
      <Header />
      
      <main className="container mx-auto px-4 pb-20 sm:pb-8">
        <div className="py-8 space-y-12">
          <HeroBanner />
          <ServiceTypeCards />
          <LocationSelector />
          <CategoryGrid />
          <RecommendedServices />
          <TopRatedCategories />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
