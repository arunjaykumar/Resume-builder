import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function WorkExperience(){

    // const [educationType, setEducationType] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [organization, setOrganization] = useState('');
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;

    return(
        <h1>this is work Experience:</h1>
    )

};

return (
  <div className='edu-container'>
    <h2>Work Experience</h2>
    <form>
<hr/>
  <div className='box-container'>
      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input type="text" id="jobTitle" name="jobTitle" value={jobTitle} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="organization">Organization Name:</label>
        <input type="text" id="organization" name="organization" value={organization} onChange={handleInputChange} />
      </div> 
      <div>
        <label htmlFor="startYear">Start Year:</label>
        <input type="text" id="startYear" name="startYear" value={startYear} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="endYear">End Year:</label>
        <input type="text" id="endYear" name="endYear" value={endYear} onChange={handleInputChange} />
      </div>
      </div>
      <hr/>
      <label>
          <button type="submit"> Back</button>
          <button type="submit">Next</button>
      </label>
    </form>
  </div>
);
}




export default WorkExperience;