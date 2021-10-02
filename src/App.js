import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchDogsFromApi, fetchVotesFromApi } from './apiCalls';
import { useDispatch } from 'react-redux'
import { setDogList, setVotesArray } from './app/actions';
import DogList from './components/DogList';
import Nav from './components/Nav';
import { Typography, CircularProgress} from '@material-ui/core';

function App() {

  const dispatch = useDispatch()
  
  const [reload, setReload] = useState(false)
  const [dogsLoaded, setDogsLoaded] = useState(true)
  const [activePage, setActivePage] = useState('list')

  useEffect(()=> {
    fetchDogsFromApi({}).then(response=>{
      dispatch(setDogList(response))
      setDogsLoaded(true)
    })
    fetchVotesFromApi({}).then(response => {
      dispatch(setVotesArray(response))
    })
  }, [reload, dispatch])

  const navigatePage = () => {
    setDogsLoaded(false)
    setReload(!reload)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Dog Lovers</Typography>
      </header>
      <br />
      <Nav reloadImages={navigatePage} type={activePage} setType={setActivePage} />
      <br />
      <div className="Images-div">
        {dogsLoaded ? <DogList type={activePage} /> : <CircularProgress />}
      </div>
    </div>
  );
}

export default App;
