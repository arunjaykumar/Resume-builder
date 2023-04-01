// function Education(){
//     return(
//         <h1>this is Education:</h1>
//     )
// }
// export default Education;
import './Education.css';

import React, { useState } from 'react';

function Education() {
  const [educationType, setEducationType] = useState('');
  const [university, setUniversity] = useState('');
  const [degree, setDegree] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // switch (name) {
    //   case 'educationType':
    //     setEducationType(value);
    //     break;
    //   case 'university':
    //     setUniversity(value);
    //     break;
    //   case 'degree':
    //     setDegree(value);
    //     break;
    //   case 'startYear':
    //     setStartYear(value);
    //     break;
    //   case 'endYear':
    //     setEndYear(value);
    //     break;
    //   default:
    //     break;
    // }
  };

  return (
    <div className='edu-container'>
      <h2>Education Details</h2>
      <form>
        <div>
          <label htmlFor="educationType">Type:</label>
          <input type="text" id="educationType" name="educationType" value={educationType} onChange={handleInputChange} />
        </div>
<hr/>
    <div className='box-container'>
        <div>
          <label htmlFor="university">University:</label>
          <input type="text" id="university" name="university" value={university} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input type="text" id="degree" name="degree" value={degree} onChange={handleInputChange} />
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

export default Education;
