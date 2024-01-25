import {
  getEducationalExperience,
  getPracticalExperience,
  addEducationalExperience,
  addPracticalExperience,
} from "../dataController";
import EducationDetails from "./EducationDetails";
import WorkDetails from "./WorkDetails";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function ExperienceSection({ type }) {
  let [addStatus, changeAddStatus] = useState(false);
  let [reRender, changeReRender] = useState(false);
  let addSection;

  const saveAndQuit = () => {
    if (type === "educational") {
      let newEducationalExperience = {
        schoolName: document.getElementById("schoolName").value,
        areaOfStudy: document.getElementById("areaOfStudy").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
      };

      addEducationalExperience(newEducationalExperience);
      changeAddStatus(false);
    } else {
      let newPracticalExperience = {
        companyName: document.getElementById("companyName").value,
        position: document.getElementById("position").value,
        description: document.getElementById("description").value,
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
      };

      addPracticalExperience(newPracticalExperience);
      changeAddStatus(false);
    }
  };

  if (!addStatus) {
    addSection = (
      <div className="buttonSection">
        <button onClick={() => changeAddStatus(true)}>Add +</button>
      </div>
    );
  } else if (type === "educational") {
    addSection = (
      <>
        <div className="details">
          <h5 className="inputLabel">School Name</h5>
          <input type="text" id="schoolName" />
          <h5 className="inputLabel">Area of Study</h5>
          <input type="text" id="areaOfStudy" />
          <h5 className="inputLabel">Start Date</h5>
          <input type="date" id="startDate" />
          <h5 className="inputLabel">End Date</h5>
          <input type="date" id="endDate" />
        </div>
        <div className="buttonSection">
          <button onClick={saveAndQuit}>Save</button>
          <button
            onClick={() => {
              changeAddStatus(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  } else {
    addSection = (
      <>
        <div className="details">
          <h5 className="inputLabel">Company Name</h5>
          <input type="text" id="companyName" />
          <h5 className="inputLabel">Position</h5>
          <input type="text" id="position" />
          <h5 className="inputLabel">Description</h5>
          <input type="text" id="description" />
          <h5 className="inputLabel">Start Date</h5>
          <input type="date" id="startDate" />
          <h5 className="inputLabel">End Date</h5>
          <input type="date" id="endDate" />
        </div>
        <div className="buttonSection">
          <button onClick={saveAndQuit}>Save</button>
          <button
            onClick={() => {
              changeAddStatus(false);
            }}
          >
            Cancel
          </button>
        </div>
      </>
    );
  }

  if (type === "educational") {
    return (
      <div className="experienceSection card">
        <h2 className="sectionTitle">Education</h2>
        <EducationDetails
          educationXP={getEducationalExperience()}
          triggerReRender={() => {
            changeReRender(!reRender);
          }}
        />
        {addSection}
      </div>
    );
  } else {
    return (
      <div className="experienceSection card">
        <h2 className="sectionTitle">Work</h2>
        <WorkDetails
          workXP={getPracticalExperience()}
          triggerReRender={() => {
            changeReRender(!reRender);
          }}
        />
        {addSection}
      </div>
    );
  }
}

export default ExperienceSection;
