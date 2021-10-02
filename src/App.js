import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchDogsFromApi } from './apiCalls';
import { useDispatch } from 'react-redux'
import { setDogList } from './app/actions';
import DogList from './components/DogList';
import Nav from './components/Nav';
import { Typography, CircularProgress} from '@material-ui/core';

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

  const navigatePage = (type="next") => {
    setDogsLoaded(false)
    setReload(!reload)
  }

  return (
    <div className="App">
      
      <header className="App-header">
        <Typography variant="h1">Dog Lovers</Typography>
      </header>
      <Nav reloadImages={navigatePage} />
      <div className="Images-div">
        {dogsLoaded ? <DogList /> : <CircularProgress />}
      </div>
    </div>
  );
}

export default App;
