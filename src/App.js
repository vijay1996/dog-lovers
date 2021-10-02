import React, { useEffect } from 'react';
import './App.css';
import { fetchDogsFromApi } from './apiCalls';
import { useDispatch } from 'react-redux'
import { setDogList } from './app/actions';

import DogList from './components/DogList';

function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    fetchDogsFromApi({}).then(response=>dispatch(setDogList(response)))
  })

  return (
    <div className="App">
      <header className="App-header">
        <DogList />
      </header>
    </div>
  );
}

export default App;
