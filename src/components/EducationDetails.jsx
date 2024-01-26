import { getEducationalExperience, setEducationalExperience } from '../dataController';
import '../styles/Experience.css'

function EducationDetails({educationXP, triggerReRender, toggleRenderPreview, renderPreview}){
    return(
        educationXP.map((education) => {
            return (
                <div className='experience' key={education.schoolName}>
                    <div className="details">
                        <h5 className="infoField"><span>School Name</span><br></br> {education.schoolName}</h5>
                        <h5 className="infoField"><span>Area of Study</span><br /> {education.areaOfStudy}</h5>
                        <h5 className="infoField">{`${education.startDate} to ${education.endDate}`}</h5>
                    </div>
                    <div className="deleteIconHolder" onClick={ () => {
                        educationXP = getEducationalExperience().filter((educationX) => {
                                        return educationX.schoolName !== education.schoolName;
                                    });
                        triggerReRender();
                        toggleRenderPreview(!renderPreview);
                        setEducationalExperience(educationXP);}
                    }>
                        <img src="../../public/delete-button.svg" alt="delete" />
                    </div>
                </div>
            );
        })
    );
}

export default EducationDetails; 