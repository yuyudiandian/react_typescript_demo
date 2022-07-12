import React from "react";
import DomRef from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";


function App() {
    return (
        <div className="App">
          <DomRef />
          <MutableRef />
        </div>
    );
}

export default App;
