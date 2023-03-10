import React, { Component } from 'react' ;
import './App.css';

 class App extends React.Component{

	render(){
		return (
			<div>
			  
			  <img src="/images/landingpage.png" alt="" />
			</div>
		  );
	}
 }

export default App;
// import React, { useState } from "react";

// function App() {
// 	const [file, setFile] = useState();
// 	function handleChange(e) {
// 		console.log(e.target.files);
// 		setFile(URL.createObjectURL(e.target.files[0]));
// 	}

// 	return (
// 		<div className="App">
// 			<h2>Add Image:</h2>
// 			<input type="file" onChange={handleChange} />
// 			<img src={} />

// 		</div>

// 	);
// }

// export default App;

