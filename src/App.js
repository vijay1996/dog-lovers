import React, { useEffect } from 'react';
import './App.css';
import { fetchDogsFromApi } from './apiCalls';

function App() {
  useEffect(()=> {
    fetchDogsFromApi({}).then((response)=>{
      console.log(response)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
