import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchDogsFromApi } from './apiCalls';
import { useDispatch } from 'react-redux'
import { setDogList } from './app/actions';

import DogList from './components/DogList';
import { Button, Typography, CircularProgress } from '@material-ui/core';

function App() {

  const dispatch = useDispatch()
  
  const [reload, setReload] = useState(false)
  const [dogsLoaded, setDogsLoaded] = useState(true)

  useEffect(()=> {
    fetchDogsFromApi({}).then(response=>{
      dispatch(setDogList(response))
      setDogsLoaded(true)
    })

  }, [reload, dispatch])

  const reloadImages = () => {
    setDogsLoaded(false)
    setReload(!reload)
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <Typography variant="h1">Dog Lovers</Typography>
      </header>
      <br />
      <nav>
        <Button variant="contained" color="primary" style={buttonStyles} onClick={()=>reloadImages()}>Reload List</Button>
        <Button variant="contained" color="primary" style={buttonStyles}>Top Dogs</Button>
      </nav>
      <br />
      <div className="Images-div">
        {dogsLoaded ? <DogList /> : <CircularProgress />}
      </div>
    </div>
  );
}

const buttonStyles = {
  margin: "1%", 
  marginTop: "0"
}

export default App;
