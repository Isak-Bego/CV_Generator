let fullData;

export function initialize() {
  //Establish the data point in the local storage if one such doesn't exits
  if (!localStorage.getItem("cvGeneratorData")) {
    fullData = {
      personalInformation: {
        name: "",
        birthday: "",
        nationality: "",
        email: "",
        phoneNumber: "",
      },
      educationalExperience: [],
      practicalExperience: [],
    };
    localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
  } else {
    fullData = JSON.parse(localStorage.getItem("cvGeneratorData"));
  }
}

export function getPersonalInformation() {
  return JSON.parse(localStorage.getItem("cvGeneratorData"))
    .personalInformation;
}

export function setPersonalInformation(updatedObject) {
  fullData.personalInformation = updatedObject;
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}

export function getEducationalExperience() {
  return JSON.parse(localStorage.getItem("cvGeneratorData"))
    .educationalExperience;
}

export function addEducationalExperience(updatedArray) {
  fullData.educationalExperience.push(updatedArray);
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}

export function setEducationalExperience(updatedArray) {
  fullData.educationalExperience = updatedArray;
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}

export function getPracticalExperience() {
  return JSON.parse(localStorage.getItem("cvGeneratorData"))
    .practicalExperience;
}

export function addPracticalExperience(updatedArray) {
  fullData.practicalExperience.push(updatedArray);
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}

export function setPracticalExperience(updatedArray) {
  fullData.practicalExperience = updatedArray;
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}

export function getAllData() {
  return fullData;
}

export function setAllData(updatedObject) {
  fullData = updatedObject;
  localStorage.setItem("cvGeneratorData", JSON.stringify(fullData));
}
