import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import './App.css';
import MovieCard from './components/MovieCard'
import NavigationBar from './components/NavigationBar';

function App() {

  const[data, setMovies] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    fetch("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3AUS&p=1&t=ns&st=adv", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`
	}
})
.then(res=> res.json())
.then(data => {
  console.log(data);
  setMovies(data.ITEMS);
  setIsLoading(false);
  
})
.catch(err => {
  console.log(err);
  
});
    
  },[])//adding this empty array prevents from infinite loop


  return (
    <div className="App">
    <NavigationBar />
    <Container>
      <Row>
        
    {data.map(items=><Col><MovieCard key={items.netflixid} items={items}/></Col>)}
    
     </Row>
     </Container>
    </div>
    
  );
}

export default App;
