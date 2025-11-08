import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "./button";
import providerElectrician from "@/assets/provider-electrician.jpg";
import providerDesigner from "@/assets/provider-designer.jpg";
import providerCarpenter from "@/assets/provider-carpenter.jpg";
import providerMarketer from "@/assets/provider-marketer.jpg";
import { useNavigate } from "react-router-dom";

const RecommendedServices = () => {
  const Navigate = useNavigate();
  const services = [
    {
      name: "Rajesh Kumar",
      profession: "Master Electrician",
      rating: 4.9,
      reviews: 234,
      location: "Mumbai, Maharashtra",
      experience: "12+ years",
      image: providerElectrician,
      price: "₹500/hr",
    },
    {
      name: "Priya Sharma",
      profession: "UI/UX Designer",
      rating: 4.8,
      reviews: 189,
      location: "Bangalore, Karnataka",
      experience: "8+ years",
      image: providerDesigner,
      price: "₹1500/hr",
    },
    {
      name: "Amit Patel",
      profession: "Carpenter & Furniture",
      rating: 4.7,
      reviews: 156,
      location: "Delhi, NCR",
      experience: "15+ years",
      image: providerCarpenter,
      price: "₹600/hr",
    },
    {
      name: "Sneha Reddy",
      profession: "Digital Marketing Expert",
      rating: 4.9,
      reviews: 298,
      location: "Hyderabad, Telangana",
      experience: "6+ years",
      image: providerMarketer,
      price: "₹2000/hr",
    },
  ];

  return (
    <section className="py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Recommended for You
        </h2>
        <p className="text-muted-foreground text-lg">
          Top-rated professionals in your area
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex-shrink-0 w-80 snap-start group"
            >
              <div className="glass-effect rounded-2xl overflow-hidden shadow-soft hover:shadow-glow transition-all hover-pop h-full">
                {/* Profile Image */}
                <div className="relative w-full h-48 mb-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div className="px-6 pb-6">

                  {/* Name & Profession */}
                  <h3 className="font-bold text-xl mb-1">{service.name}</h3>
                  <p className="text-muted-foreground mb-3">{service.profession}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sm">{service.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({service.reviews} reviews)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {service.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      {service.experience} experience
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting at</p>
                      <p className="font-bold text-lg text-primary">{service.price}</p>
                    </div>
                    <Button className="gradient-primary text-white rounded-full shadow-glow hover:shadow-hover transition-all" onClick={() => Navigate('/booking')}>
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedServices;
