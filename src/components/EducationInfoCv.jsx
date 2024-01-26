
import '../styles/Preview.css'
function EducationInfoCv({educationInfo}){
    let eduIn = educationInfo.map((education) => {
        return(
            <div className="educationInfoContainer" key={education.schoolName}>
                <h5>School Name: <span style={{fontWeight: 300}}>{education.schoolName}</span></h5>
                <h5>Field: <span style={{fontWeight: 300}}>{education.areaOfStudy}</span></h5>
                <h5>Start Date: <span style={{fontWeight: 300}}>{education.startDate}</span></h5>
                <h5>End Date: <span style={{fontWeight: 300}}>{education.endDate}</span></h5>
                <br />
            </div>
        );
    })
    return(
        eduIn
    );
}

export default EducationInfoCv; 