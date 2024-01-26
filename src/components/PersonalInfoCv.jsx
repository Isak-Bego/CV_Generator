/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function PersonalInfoCv({personalInfo}){
    return (
        <>
            <h5>Name: <span style={{fontWeight: 300}}>{personalInfo.name}</span></h5>
            <h5>Birthday: <span style={{fontWeight: 300}}>{personalInfo.birthday}</span></h5>
            <h5>Nationality: <span style={{fontWeight: 300}}>{personalInfo.nationality}</span></h5>
            <h5>Email: <span style={{fontWeight: 300}}>{personalInfo.email}</span></h5>
            <h5>Phone Number: <span style={{fontWeight: 300}}>{personalInfo.phoneNumber}</span></h5>
            <br /> 
        </>
    );
}

export default PersonalInfoCv;