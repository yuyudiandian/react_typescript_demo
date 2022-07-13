import React from "react";
import { CustomButton } from "./components/Button/Button";
import {Text} from "./components/Component";
import './style/Button.css'


function App() {
    return (
		<div className="App">
			<CustomButton variant="primary" onClick={() => console.log('Clicked!')}>Primary Button</CustomButton>
      <CustomButton variant="danger" onClick={() => console.log('Clicked!')}>
        <div>Danger Button</div>
      </CustomButton>
      <Text as='label' size = {'md'} color='secondary' htmlFor='someId'>hello! i am CustomComponent</Text>
		</div>
	)
}

export default App;
