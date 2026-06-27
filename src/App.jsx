import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Company from "./Company";
import Business from "./Business";
import ProductsServices from "./ProductsServices"; 
import ContactUs from "./ContactUs"; 
import MachinesPlants from "./MachinesPlants";
import History from "./History";
import VisionMission from "./VisionMission";
import ManpowerOrg from "./ManpowerOrg";
import FocustekQMS from "./FocustekQms";
import Regulations from "./Regulations";
import Gstin from "./Gstin";
import Customers from "./Customers";
import SmtProduction from "./SmtProduction";
import MiProduction from "./MiProduction";
import Careers from "./Careers";
import QualityCertificate from "./QualityCertificate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/business" element={<Business />} /> 
        <Route path="/products-services" element={<ProductsServices />} />
        <Route path="/contact-us" element={<ContactUs />} /> 
        <Route path="/machines-plants" element={<MachinesPlants />} /> 
        <Route path="/company/history" element={<History />} /> 
        <Route path="/company/vision-mission" element={<VisionMission />} /> 
        <Route path="/company/manpower-organization-charts" element={<ManpowerOrg />} />
        <Route path="/company/focustek-qms" element={<FocustekQMS />} />
        <Route path="/company/our-regulations" element={<Regulations />} />
        <Route path="/company/gstin" element={<Gstin />} />
        <Route path="/company/our-customers" element={<Customers />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/quality-certificate" element={<QualityCertificate />} />
        <Route path="/business/smt-production-line" element={<SmtProduction />} />
        <Route path="/business/mi-production-line" element={<MiProduction />} />

      </Routes>
    </Router>
  );
}