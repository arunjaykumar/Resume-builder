import React from "react";
import { Link, Routes } from "react-router-dom";
import "./Details.css";
import PersionalInfo from "../component/PersionalInfo";
import WorkExperience from "../component/WorkExperience";
import KeySkills from "../component/KeySkills";
import Education from "../component/Education";
// import Navbar from "../component/navbar/Navbar";
const Details = () => {
  return (
    <>
      <div className="container">
        <label className="detail-info">
          <Link to="/persionalInfo" className="p-i">
            Persional Info:
          </Link>
          <Link to="/workExperience" className="p-i">
            Work Experience:
          </Link>
          <Link to="/education" className="p-i">
            Education:
          </Link>
          <Link to="/keySkills" className="p-i">
            KeySkill:
          </Link>
        </label>
      </div>
    </>
  );
};

export default Details;
