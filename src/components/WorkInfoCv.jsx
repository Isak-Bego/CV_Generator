function WorkInfoCv({workInfo}){
    let workIn = workInfo.map((work) => {
        return(
            <div className="educationInfoContainer" key={work.schoolName}>
                <h5>Company Name: <span style={{fontWeight: 300}}>{work.companyName}</span></h5>
                <h5>Position: <span style={{fontWeight: 300}}>{work.position}</span></h5>
                <h5>Description: <span style={{fontWeight: 300}}>{work.description}</span></h5>
                <h5>Start Date: <span style={{fontWeight: 300}}>{work.startDate}</span></h5>
                <h5>End Date: <span style={{fontWeight: 300}}>{work.endDate}</span></h5>
                <br />
            </div>
        );
    })
    return(
        workIn
    );
}

export default WorkInfoCv;