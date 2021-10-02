//This will contain reducers to alter different state properties of the store

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