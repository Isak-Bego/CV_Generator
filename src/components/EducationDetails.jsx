import '../styles/Experience.css'

function EducationDetails({educationXP}){
    return(
        educationXP.map((education) => {
            return (
                <div className="details experience" key={education.schoolName}>
                    <h5 className="infoField"><span>School Name</span><br></br> {education.schoolName}</h5>
                    <h5 className="infoField"><span>Area of Study</span><br /> {education.areaOfStudy}</h5>
                    <h5 className="infoField">{`${education.startDate} to ${education.endDate}`}</h5>
                </div>
            );
        })
    );
}

export default EducationDetails; 