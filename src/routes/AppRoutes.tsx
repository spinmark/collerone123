import { Route, Routes } from "react-router-dom";
import Index from "@/pages/Index";
import Services from "../pages/Services";
import SubServices from "../pages/SubServices";

const AppRoutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Index />} />
      <Route path="services/:id" element={<Services />} />
       <Route path="sub/services/:id" element={<SubServices />} />
    </Routes>
  );
};

export default AppRoutes;
