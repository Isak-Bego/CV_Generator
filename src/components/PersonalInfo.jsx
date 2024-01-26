import { useState } from "react";
import { getPersonalInformation, setPersonalInformation } from "../dataController";
import '../styles/PersonalInfo.css'

// eslint-disable-next-line react/prop-types
function PersonalInfo({toggleRenderPreview, renderPreview}){
    let [editMode, setEditMode] = useState(false);
    const personalInfo = getPersonalInformation();

    const saveAndQuit = () => {
        personalInfo.name = document.getElementById("name").value;
        personalInfo.birthday = document.getElementById("birthday").value;
        personalInfo.nationality = document.getElementById("nationality").value;
        personalInfo.email = document.getElementById("email").value;
        personalInfo.phoneNumber = document.getElementById("phoneNumber").value; 
        setPersonalInformation(personalInfo); 
        toggleRenderPreview(!renderPreview);
        setEditMode(false);
    }

    if(editMode){
        return(
            <div className="personalInformation card">
                <h2 className="sectionTitle">Personal Information</h2>
                <div className="details">
                    <h5 className="inputLabel">Name</h5>
                    <input type="text" defaultValue={personalInfo.name} id="name"/>
                    <h5 className="inputLabel">Birthday</h5>
                    <input type="date" defaultValue={personalInfo.birthday} id="birthday"/>
                    <h5 className="inputLabel">Nationality</h5>
                    <input type="text" defaultValue={personalInfo.nationality} id="nationality"/>
                    <h5 className="inputLabel">Email</h5>
                    <input type="email" defaultValue={personalInfo.email} id="email"/>
                    <h5 className="inputLabel">Phone Number</h5>
                    <input type="text" defaultValue={personalInfo.phoneNumber} id="phoneNumber"/>
                </div>
                <div className="buttonSection">
                        <button onClick={saveAndQuit}>
                            Save
                        </button>
                        <button onClick={()=>{setEditMode(false)}}>
                            Cancel
                        </button>
                </div>
            </div>
        );
    }
    return (
        <div className="personalInformation card">
            <h2 className="sectionTitle">Personal Information</h2>
            <div className="details">
                <h5 className="infoField"><span>Name:</span> {personalInfo.name}</h5>
                <h5 className="infoField"><span>Brithday:</span> {personalInfo.birthday}</h5>
                <h5 className="infoField"><span>Nationality:</span> {personalInfo.nationality}</h5>
                <h5 className="infoField"><span>Email:</span> {personalInfo.email}</h5>
                <h5 className="infoField"><span>Phone Number:</span> {personalInfo.phoneNumber}</h5>
            </div>
            <div className="buttonSection">
                <button onClick={()=>{setEditMode(true)}}>
                    Edit
                </button>
            </div>
        </div>
    );
}

export default PersonalInfo;