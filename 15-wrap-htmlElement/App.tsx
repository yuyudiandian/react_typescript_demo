import React from "react";
import { CustomButton } from "./components/Button/Button";
import './style/Button.css'


function App() {
    return (
		<div className="App">
			<CustomButton variant="primary" onClick={() => console.log('Clicked!')}>Primary Button</CustomButton>
      <CustomButton variant="danger" onClick={() => console.log('Clicked!')}>
        <div>Danger Button</div>
      </CustomButton>
		</div>
	)
}

export default App;
