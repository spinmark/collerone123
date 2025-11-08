import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Services from "../pages/Services";
import SubServices from "../pages/SubServices";
import ServiceProfile from "../components/SeviceProfile";
import ScrollToTop from "../hooks/Scroll-Up";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="services/:id" element={<Services />} />
        <Route path="sub/services/:id" element={<SubServices />} />
        <Route path="/booking" element={<ServiceProfile/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;