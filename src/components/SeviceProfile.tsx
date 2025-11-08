import { useState } from "react";
import { Star, MapPin, Phone, Clock, Briefcase } from "lucide-react";
import providerElectrician from "@/assets/provider-electrician.jpg";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

export default function ProfessionalProfile() {
  const tabs = ["Overview", "Gallery", "Reviews", "Services"];
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto bg-white shadow-md rounded-xl overflow-hidden mt-8 mb-12">
          {/* Cover Image Section */}
          <div className="relative">
            <img
              src={providerElectrician}
              alt="Rajesh Kumar"
              className="w-full h-72 object-cover"
            />

            {/* Profile Overlay Card */}
            <div className="absolute bottom-4 left-6 flex items-center gap-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg">
              <img
                src={providerElectrician}
                alt="Rajesh Kumar"
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Rajesh Kumar
                </h1>
                <p className="text-gray-600">Master Electrician</p>
                <div className="flex items-center mt-1">
                  <Star className="text-yellow-400 w-5 h-5 mr-1" />
                  <span className="font-semibold text-gray-800">4.9</span>
                  <span className="text-gray-500 ml-1">(234 reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 flex justify-start gap-8 px-6 mt-4 overflow-x-auto scrollbar-hide justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-sm font-bold transition border-b-2
            ${activeTab === tab
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Overview Section */}
          <div className="p-6 grid md:grid-cols-3 gap-8">
            {/* Left - Info */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold mb-3 text-gray-900">
                About Rajesh
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rajesh Kumar is a certified master electrician with over 12 years of
                experience in residential and commercial electrical projects.
                Known for reliability, attention to detail, and customer satisfaction.
              </p>

              <h3 className="text-md font-semibold mb-2 text-gray-900">
                Specializations
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Wiring",
                  "Lighting",
                  "Maintenance",
                  "Installation",
                  "Safety Inspection",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h3 className="text-md font-semibold mb-2 text-gray-900">
                Contact Details
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-500" /> +91 98765 43210
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" /> Mumbai, Maharashtra
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" /> Mon – Sat: 9am – 6pm
                </p>
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 shadow-inner">
              <div className="flex items-center mb-3">
                <Briefcase className="text-blue-600 w-5 h-5 mr-2" />
                <p className="text-gray-800 font-semibold">Experience</p>
              </div>
              <p className="text-gray-600 mb-4">
                12+ years professional experience
              </p>

              <div className="flex justify-between items-center">
                <p className="text-gray-800 font-medium">Starting at</p>
                <p className="text-blue-600 font-bold text-lg">₹500/hr</p>
              </div>

              <button className="w-full mt-5 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
