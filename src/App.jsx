import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
// import PriceList from './pages/PriceList';
import Doctors from "./pages/Doctors";
import WhyUs from "./pages/WhyUs";
import ClinicalTour from "./pages/ClinicalTour";
import ContactUs from "./pages/ContactUs";
import PricelIst from "./pages/PricelIst";

import About from "./bottompages/About";
import Treatments from "./bottompages/Treatments";
import Doctor from "./bottompages/Doctor";
import Explore from "./bottompages/Explore";
import ContactUsBottom from "./bottompages/ContactUs";
import Footer from "./components/Footer";
import DentalServices from "./components/DentalServices";
import GeneralDentistry from "./services/GeneralDentistry";
import PreventiveCare from "./services/PreventiveCare";
import RestorativeDentistry from "./services/RestorativeDentistry";
import CosmeticDentistry from "./services/CosmeticDentistry";
import OrthoDontics from "./services/OrthoDontics";
import EndoDontics from "./services/EndoDontics";
import PerioDontics from "./services/PerioDontics";
import OralSurgery from "./services/OralSurgery";
import EmergencyCare from "./services/EmergencyCare";
import PediatricDentistry from "./services/PediatricDentistry";
import RootCanalTreatment from "./services/RootCanalTreatment";
import DentalImplant from "./services/DentalImplant";
import CrownAndBridges from "./services/CrownAndBridges";
import CosmeticProcedures from "./services/CosmeticProcedures";
import Braces from "./services/Braces";
import ChildDentistry from "./services/ChildDentistry";
import Surgeries from "./services/Surgeries";
import OtherProcedures from "./services/OtherProcedures";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="min-h-screen pt-16 pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/ourteam" element={<Doctors />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/clinicaltour" element={<ClinicalTour />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/price-list" element={<PricelIst />} />
          //bottom pages
          <Route path="/about-us" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<ContactUsBottom />} />
          //servicepages
          <Route path="/General-dentistry" element={<GeneralDentistry />} />
          <Route path="/Preventive-Care" element={<PreventiveCare />} />
          <Route
            path="/Restorative-Dentistry"
            element={<RestorativeDentistry />}
          />
          <Route path="/OrthoDontics" element={<OrthoDontics />} />
          <Route path="/EndoDontics" element={<EndoDontics />} />
          <Route path="/PerioDontics" element={<PerioDontics />} />
          <Route path="/Oral-Surgery" element={<OralSurgery />} />
          <Route path="/Pediatric-Dentistry" element={<PediatricDentistry />} />
          <Route path="/Emergency-Care" element={<EmergencyCare />} />
          <Route path="/Cosmetic-Dentistry" element={<CosmeticDentistry />} />

          
          <Route path="/services/root-canal" element={<RootCanalTreatment />} />
          <Route path="/services/implants" element={<DentalImplant />} />
          <Route path="/services/crown-bridge" element={<CrownAndBridges />} />
           <Route path="/services/cosmetic" element={<CosmeticProcedures />} />
           <Route path="/services/braces" element={<Braces />} />
           <Route path="/services/children" element={<ChildDentistry />} />
          <Route path="/services/surgeries" element={<Surgeries />} />
          <Route path="/services/others" element={<OtherProcedures />} />

        </Routes>
      </main>

      <DentalServices />
      <Footer />
      <BottomBar />
    </Router>
  );
}

export default App;
