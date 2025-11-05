import { Wrench, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "./button";
import blueCollarImage from "@/assets/blue-collar-service.jpg";
import whiteCollarImage from "@/assets/white-collar-service.jpg";

const ServiceTypeCards = () => {
  const serviceTypes = [
    {
      icon: Wrench,
      title: "Blue-Collar Services",
      description: "Technical & Labor Services",
      examples: "Electrician, Plumber, Carpenter, AC Repair",
      color: "from-primary to-primary-light",
      hoverColor: "group-hover:shadow-[0_0_40px_rgba(19,51,130,0.4)]",
      image: blueCollarImage,
    },
    {
      icon: Briefcase,
      title: "White-Collar Services",
      description: "Professional & Digital Services",
      examples: "Designer, Developer, Consultant, Marketing",
      color: "from-accent to-primary-glow",
      hoverColor: "group-hover:shadow-[0_0_40px_rgba(57,86,180,0.4)]",
      image: whiteCollarImage,
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Choose Your Service Type
        </h2>
        <p className="text-muted-foreground text-lg">
          Select the category that best fits your needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {serviceTypes.map((service) => (
          <div
            key={service.title}
            className={`group relative overflow-hidden rounded-3xl shadow-soft hover-pop cursor-pointer transition-all duration-500 ${service.hoverColor}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8">
              <div className={`w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 shadow-glow animate-float border border-white/30`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-white drop-shadow-lg">
                {service.title}
              </h3>
              
              <p className="text-white/95 mb-4 font-medium drop-shadow">
                {service.description}
              </p>
              
              <p className="text-sm text-white/90 mb-6 drop-shadow">
                {service.examples}
              </p>
              
              <Button
                className="w-full bg-white text-primary rounded-full font-semibold shadow-glow hover:shadow-hover transition-all group-hover:scale-105 hover:bg-white/90"
              >
                View Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-2xl" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTypeCards;
