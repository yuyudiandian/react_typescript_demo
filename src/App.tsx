import React from "react";

import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonNameList from "./components/PersonList";

function App() {
  const personName = {
    firstName: "John",
    lastName: "Doe"
  }

  const personNameList = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Arm", lastName: "Strong" }
  ]
    return (
        <div className="App">
            <Greet name={"Hello"} age = {22} isLoggedIn={true}/>
            <Person name={personName}/>
            <PersonNameList personList={personNameList}/>
        </div>
    );
}

export default App;
