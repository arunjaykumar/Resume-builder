// function KeySkills(){
//     return(
//         <h1>this is KeySkills:</h1>
//     )
// }
// export default KeySkills;
import './KeySkills.css'
import React, { useState } from 'react';

function KeySkills() {
  const [skills, setSkills] = useState([
    { id: 1, skill: '' },
    { id: 2, skill: '' },
    { id: 3, skill: '' },
    { id: 4, skill: '' },
  ]);

  const handleSkillChange = (id, value) => {
    setSkills(skills => {
      const updatedSkills = [...skills];
      const index = updatedSkills.findIndex(s => s.id === id);
      updatedSkills[index] = { ...updatedSkills[index], skill: value };
      return updatedSkills;
    });
  };

  const handleAddSkill = ()=> {
    const newSkill = { id: skills.length + 1, skill: '' };
    setSkills(skills => [...skills, newSkill]);
  };

  return (
    <div className='key-container'>
        <h2> KeySkills:</h2>
      {skills.map(({ id, skill }) => (
        <div key={id}>
          <input
            type="text"
            value={skill}
            onChange={e => handleSkillChange(id, e.target.value)}
          />
        </div>
      ))}
      <button className='btn' onClick={handleAddSkill}>Add New</button>
      <hr/>
      <label>
          <button type="submit">Back</button>
          <button type="submit">Next</button>
        </label>
    </div>
  );
}

export default KeySkills;
