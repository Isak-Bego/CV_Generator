import PersonalInfo from './PersonalInfo.jsx'
import ExperienceSection from './ExperienceSection.jsx'


function Editor(){
    return (
        <div className='Editor'>
            <PersonalInfo/>
            <ExperienceSection type="educational" />
            <ExperienceSection type="practical" />
        </div>
    );
}

export default Editor; 