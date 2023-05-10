
import React from 'react';

import './choose-user-input.css';

export const ChooseUserInput = () => (

  <div className="choose-type">

   
      <label htmlFor="student-type" className='student-type'>
        <input id="student-type" type="radio" defaultChecked='checked' name="question"  />
        <span>Ученик</span></label>

      <label htmlFor="teacher-type" className='teacher-type'>
        <input id="teacher-type" type="radio" name="question"  />
        <span>Преподаватель</span></label>
  
  </div>


)

