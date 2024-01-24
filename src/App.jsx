import './App.css'
import { getPersonalInformation, setPersonalInformation } from './dataController'

function App() {
  let personalInfo = getPersonalInformation();
  setPersonalInformation({name: "Flori", birthday: "27/02/2007", nationality: "albanian", email: "isakbego@gmail.com", phoneNumber: "+355677198678"})
  console.log(personalInfo);
}

export default App
