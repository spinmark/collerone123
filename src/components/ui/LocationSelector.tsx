import { MapPin, Navigation } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const LocationSelector = () => {
  const [location, setLocation] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Bangalore", "Mumbai", "Delhi", "Chennai", "Kolkata", "Hyderabad", "Pune"
  ];

  const filteredStates = indianStates.filter(state =>
    state.toLowerCase().includes(location.toLowerCase())
  );

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords);
          setLocation("Current Location");
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Where do you need services?
          </h2>
          <p className="text-muted-foreground">
            Enter your location to find professionals nearby
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-6 shadow-glow">
          <div className="relative mb-4">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              placeholder="Type your state or city..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-primary/20 focus:border-primary outline-none transition-smooth bg-white/80 backdrop-blur"
            />
            
            {/* Suggestions Dropdown */}
            {showSuggestions && location && filteredStates.length > 0 && (
              <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-hover border border-primary/10 max-h-60 overflow-y-auto">
                {filteredStates.map((state) => (
                  <button
                    key={state}
                    onClick={() => {
                      setLocation(state);
                      setShowSuggestions(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-primary/5 transition-colors border-b last:border-b-0"
                  >
                    {state}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={handleUseCurrentLocation}
            className="w-full gradient-primary text-white rounded-xl font-semibold shadow-glow hover:shadow-hover transition-all"
          >
            <Navigation className="mr-2 w-5 h-5" />
            Use My Current Location
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;
