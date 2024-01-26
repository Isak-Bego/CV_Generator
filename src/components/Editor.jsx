import PersonalInfo from './PersonalInfo.jsx'
import ExperienceSection from './ExperienceSection.jsx'


// eslint-disable-next-line react/prop-types
function Editor({toggleRenderPreview, renderPreview}){
    return (
        <div className='Editor'>
            <PersonalInfo toggleRenderPreview={toggleRenderPreview} renderPreview={renderPreview}/>
            <ExperienceSection type="educational" toggleRenderPreview={toggleRenderPreview} renderPreview={renderPreview}/>
            <ExperienceSection type="practical" toggleRenderPreview={toggleRenderPreview} renderPreview={renderPreview}/>
        </div>
    );
}

export default Editor; 