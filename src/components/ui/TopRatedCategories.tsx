import { useState } from "react";
import { TrendingUp, MapPin, Star } from "lucide-react";
import { Button } from "./ui/button";

const TopRatedCategories = () => {
  const [activeTab, setActiveTab] = useState<"popular" | "nearby" | "trending">("popular");

  const categories = {
    popular: [
      { name: "Home Cleaning", subcategory: "Deep Cleaning", rating: 4.9, providers: 156 },
      { name: "AC Repair", subcategory: "Installation & Service", rating: 4.8, providers: 234 },
      { name: "Web Development", subcategory: "Full Stack", rating: 4.9, providers: 412 },
      { name: "Interior Design", subcategory: "Residential", rating: 4.7, providers: 189 },
    ],
    nearby: [
      { name: "Plumbing", subcategory: "Emergency Services", rating: 4.8, providers: 98 },
      { name: "Electrician", subcategory: "Wiring & Repair", rating: 4.9, providers: 145 },
      { name: "Graphic Design", subcategory: "Logo & Branding", rating: 4.7, providers: 267 },
      { name: "Carpentry", subcategory: "Custom Furniture", rating: 4.8, providers: 112 },
    ],
    trending: [
      { name: "Digital Marketing", subcategory: "SEO & Social Media", rating: 4.9, providers: 298 },
      { name: "App Development", subcategory: "iOS & Android", rating: 4.8, providers: 334 },
      { name: "Photography", subcategory: "Event Coverage", rating: 4.7, providers: 176 },
      { name: "Pest Control", subcategory: "Residential", rating: 4.6, providers: 87 },
    ],
  };

  const tabs = [
    { key: "popular" as const, label: "Popular", icon: Star },
    { key: "nearby" as const, label: "Nearby", icon: MapPin },
    { key: "trending" as const, label: "Trending", icon: TrendingUp },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Top-Rated Categories
        </h2>
        <p className="text-muted-foreground text-lg">
          Explore the most trusted services
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            variant={activeTab === tab.key ? "default" : "outline"}
            className={`rounded-full transition-all ${
              activeTab === tab.key
                ? "gradient-primary text-white shadow-glow"
                : "border-primary/30 hover:bg-primary/10"
            }`}
          >
            <tab.icon className="w-4 h-4 mr-2" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Category Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
        {categories[activeTab].map((category) => (
          <div
            key={category.name}
            className="glass-effect rounded-2xl p-6 shadow-soft hover:shadow-glow transition-all hover-pop cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.subcategory}</p>
              </div>
              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{category.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-primary/10">
              <span className="text-sm text-muted-foreground">
                {category.providers} providers
              </span>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary hover:bg-primary/10 rounded-full"
              >
                Explore →
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedCategories;
