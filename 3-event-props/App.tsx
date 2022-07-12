import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
    return (
        <div className="App">
            <Button handleClick={(e,id) => console.log(e,id)}></Button>
            <Input handleChange={(e) => console.log(e.currentTarget.value)}/>
        </div>
    );
}

export default App;
