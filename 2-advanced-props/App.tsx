import React from "react";

import Father from "./components/Father";
import Child from "./components/Child";

function App() {
    return (
        <div className="App">
            <Father>
                <Child/>
            </Father>
        </div>
    );
}

export default App;
