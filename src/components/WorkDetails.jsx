import '../styles/Experience.css'
import { getPracticalExperience, setPracticalExperience } from '../dataController';

function WorkDetails({workXP, triggerReRender, toggleRenderPreview, renderPreview}){
    return(
        workXP.map((work) => {
            return (
            <div className="experience" key={work.companyName}>
                <div className="details" >
                    <h5 className="infoField"><span>Company Name</span><br></br> {work.companyName}</h5>
                    <h5 className="infoField"><span>Position</span><br /> {work.position}</h5>
                    <h5 className="infoField"><span>Description</span><br /> {work.description}</h5>
                    <h5 className="infoField">{`${work.startDate} to ${work.endDate}`}</h5>
                </div>
                <div className="deleteIconHolder" onClick={ () => {
                        workXP = getPracticalExperience().filter((workX) => {
                                        return workX.companyName !== work.companyName;
                                    });
                        triggerReRender();
                        toggleRenderPreview(!renderPreview);
                        setPracticalExperience(workXP);}
                    }>
                    <img src="../../public/delete-button.svg" alt="delete" />
                </div>
            </div>
            );
        })
    );
}

export default WorkDetails; 