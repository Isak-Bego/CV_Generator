function WorkDetails({workXP}){
    return(
        workXP.map((work) => {
            return (
                <div className="details experience" key={work.companyName}>
                    <h5 className="infoField"><span>Company Name</span><br></br> {work.companyName}</h5>
                    <h5 className="infoField"><span>Position</span><br /> {work.position}</h5>
                    <h5 className="infoField"><span>Description</span><br /> {work.description}</h5>
                    <h5 className="infoField">{`${work.startDate} to ${work.endDate}`}</h5>
                </div>
            );
        })
    );
}

export default WorkDetails; 