import { Button } from "./button";
import electricianImg from "@/assets/category-electrician.jpg";
import carpenterImg from "@/assets/category-carpenter.jpg";
import designerImg from "@/assets/category-designer.jpg";
import developerImg from "@/assets/category-developer.jpg";
import marketerImg from "@/assets/category-marketer.jpg";
import photographerImg from "@/assets/category-photographer.jpg";
import plumberImg from "@/assets/category-plumber.jpg";
import consultantImg from "@/assets/category-consultant.jpg";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();
  const categories = [
    { name: "Electrician", count: "234 professionals", image: electricianImg },
    { name: "Carpenter", count: "189 professionals", image: carpenterImg },
    { name: "Designer", count: "412 professionals", image: designerImg },
    { name: "Developer", count: "567 professionals", image: developerImg },
    { name: "Digital Marketer", count: "298 professionals", image: marketerImg },
    { name: "Photographer", count: "176 professionals", image: photographerImg },
    { name: "Plumber", count: "145 professionals", image: plumberImg },
    { name: "Consultant", count: "321 professionals", image: consultantImg },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Popular Categories
        </h2>
        <p className="text-muted-foreground text-lg">
          Browse services by category
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-glow transition-all hover-pop cursor-pointer h-64"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-end text-center p-6">
              
              <h3 className="font-bold text-lg mb-1 text-white drop-shadow-lg">
                {category.name}
              </h3>
              
              <p className="text-xs text-white/90 mb-4 drop-shadow">
                {category.count}
              </p>
              
              <Button
                size="sm"
                className="rounded-full bg-white text-primary hover:bg-white/90 transition-all font-semibold"
                onClick={() => navigate(`/sub/services/${category.name.toLowerCase()}`)}
              >
                View Services
              </Button>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
