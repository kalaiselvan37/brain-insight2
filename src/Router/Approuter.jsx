import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../components/Home/Home";
import SoftwareTrainingPage from "../components/ServicesSection/Softwaretrainingpage";
import AcademicProjectspage from "../components/ServicesSection/AcademicProjectspage";
import InternshipProgramPage from "../components/ServicesSection/InternshipProgrampage";
import InplantTrainingpage from "../components/ServicesSection/InplantTrainingpage";
import ContactUsPage from "../components/ContactUsSection/ContactUspage";

const Approuter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Main/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/softwaretraining" element={<SoftwareTrainingPage/>}/>
                    <Route path="/academicprojects" element={<AcademicProjectspage/>}/>
                    <Route path="/internshipprogram" element={<InternshipProgramPage/>}/>
                    <Route path="/inplanttraining" element={<InplantTrainingpage/>}/>
                    <Route path="/contactus" element={<ContactUsPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );
};
export default Approuter;