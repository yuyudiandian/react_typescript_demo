import React from "react";
import Lists from "./components/List";


function App() {
    return (
		<div className="App">
			<Lists items={['a', 'b', 'c']} onClick={item => console.log(item)} />
			<Lists items={[1, 2, 3]} onClick={item => console.log(item)} />
            {/* <Lists items={[
                { id: 1, name: 'a' },
                { id: 2, name: 'b' },
                { id: 3, name: 'c' }
            ]} onClick={item => console.log(item)} /> */}
		</div>
	)
}

export default App;
