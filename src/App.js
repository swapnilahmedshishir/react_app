// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Movie></Movie>
     
      <User name="Bangladesh"></User>
      <User name="PakisTan"></User>
      <User name="soudia araib"></User>
      <User name="America"></User>
      <header className="App-header">
      
      </header>
    </div>
  );
}

function User(props){
  return (
    <div className='userStyle'>
      <h1> Helow {props.name} {props.showHall}</h1>
     
    </div>
  );
}

function Movie(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+2);
  return(
    <div>
      <button onClick={handleClick} > add movies</button>
      <h3>movies publication : {count} </h3>
      <DisplayMovie showHall={count + 10}></DisplayMovie>
      <DisplayMovie showHall={count + 5}></DisplayMovie>
      <User showHall={count + 1} ></User>
    </div>
  );
}

function DisplayMovie(props){
  console.log(props);
  return (
    <div>
      <h4>dispaly Holl : {props.showHall} </h4>
    </div>
  );
}
export default App;
