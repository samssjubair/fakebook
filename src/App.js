
import fakeLogo from '../src/fakeook.jpg';
import data from './data/data.json';
import './App.css';
import { useEffect, useState } from 'react';
import Celebrity from './Components/Celebrity/Celebrity';


function App() {
  const [addedCelebrities,setAddedCelebrities]= useState([]);
  function handleClick(celebrity){
    console.log(celebrity);
    const newList=[...addedCelebrities,celebrity];
    setAddedCelebrities(newList);
  }
  const [celebrities,setCelebrities]= useState([]);
  useEffect(()=>{
    setCelebrities(data)
  },[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img style={{height: '50px'}} src={fakeLogo} alt=""/>
        <h1>Total Celebrity available: {celebrities.length}</h1>
        <h2>Total celebrities added: {addedCelebrities.length}</h2>
        <div className="container">
        {
          celebrities.map(celeb=> <Celebrity key={celeb.id} handleClick={handleClick} celebrity={celeb}></Celebrity>)
        }
        </div>
        
      </header>
    </div>
  );
}

export default App;
