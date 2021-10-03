//This will contain reducers to alter different state properties of the store

import { combineReducers } from "redux"

export const dogListReducer = (state={}, action) => {

    //This reducer sets the dogList state of the store

    const newState = {...state}
    switch(action.type){
        case 'setDogList':
            newState.dogList = action.payload
            return newState
        default:
            return newState
    }
}

export const unitReducer = (state={unit: "imperial"}, action) => {

    //This reducer sets the unit system state of the store

    const newState = {...state}
    switch(action.type){
        case 'setUnit':
            newState.unit = action.payload
            return newState
        default:
            return newState
    }
}

export const votesArrayReducer = (state={}, action) => {

    //This reducer sets the votes array list state of the store
    
    const newState = {...state}
    switch(action.type){
        case 'setVotesArray':
            newState.votesArray = action.payload
            return newState
        default:
            return newState
    }
}

export default combineReducers({dogListReducer, unitReducer, votesArrayReducer})