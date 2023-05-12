import React from "react";
import "./choose-user-input.css";

export const ChooseUserInput = ({ setUserType }) => {
  const changeValue = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="choose-type">
      <label htmlFor="student-type" className="student-type">
        <input
          id="student-type"
          type="radio"
          defaultChecked="checked"
          name="question"
          value="student"
          onChange={changeValue}
        />
        <span>Ученик</span>
      </label>
      <label htmlFor="teacher-type" className="teacher-type">
        <input
          id="teacher-type"
          type="radio"
          name="question"
          value="teacher"
          onChange={changeValue}
        />
        <span>Преподаватель</span>
      </label>
    </div>
  );
};
