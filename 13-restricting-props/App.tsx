import React from "react";
import { RandomNumber } from "./components/RandomNumber";


function App() {
    return (
		<div className="App">
			<RandomNumber value={10} isPositive={true}/>
		</div>
	)
}

export default App;
