import * as React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Details from "./page/Details";
import Preview from "./page/Preview";
import Navbar from "./component/navbar/Navbar";
import PersionalInfo from "./component/PersionalInfo";
import Education from "./component/Education";
import KeySkills from "./component/KeySkills";
import WorkExperience from "./component/WorkExperience";

function App() {
  return (
    <div>
      <Navbar />
     
      <div className="ctnr">
      < Details />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details" element={<Details />} />
        <Route path="About" element={<About />} />
        <Route path="Preview" element={<Preview />} />
      </Routes>
      <Routes>
        <Route path="persionalInfo" element={<PersionalInfo />} />
        <Route path="WorkExperience" element={<WorkExperience />} />
        <Route path="Education" element={<Education />} />
        <Route path="KeySkills" element={<KeySkills />} />
      </Routes>
      </div>

    </div>
  );
}

export default App;
