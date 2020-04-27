import React,{useState, useEffect} from 'react';



import './App.css';

function App() {

  useEffect(()=>{
    fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
	}
})
.then(res=> res.json())
.then(response => {
  console.log(response);
  
})
.catch(err => {
  console.log(err);
  
});
    
  })


  return (
    <div className="App">
     <p>Hello world</p>
    </div>
  );
}

export default App;
