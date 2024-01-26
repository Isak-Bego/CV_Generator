import '../styles/Preview.css'
import PersonalInfoCv from './PersonalInfoCv';
import EducationInfoCv from './EducationInfoCv';
import WorkInfoCv from './WorkInfoCv';

// eslint-disable-next-line react/prop-types
function Preview(allData){
    return (
        <div className="Preview">
            <div className="cvContainer">
                <div className="cvContent">
                    <h1>Curriculum Vitae</h1>
                    <h3>Personal Information</h3>
                    <hr />
                    <PersonalInfoCv personalInfo={allData.allData.personalInformation}/>
                    <h3>Education</h3>
                    <hr />
                    <EducationInfoCv educationInfo={allData.allData.educationalExperience}/>
                    <h3>Work</h3>
                    <hr />
                    <WorkInfoCv workInfo={allData.allData.practicalExperience}/>
                </div>
            </div>
        </div>
    );
}


export default Preview; 