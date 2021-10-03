//This exports the actions that has to be used to dispatch changes to the store state

export const setDogList = (payload) => {
    //This action sets the dog list by accepting the dogList as payload from the user
    return {
      type: "setDogList",
      payload
    }
}

export const setUnit = (payload) => {
  //This action sets the unit system by accepting the unit system as payload from the user
  return {
    type: "setUnit",
    payload
  }
}

export const setVotesArray = (payload) => {
  //This action sets the vote array by accepting the vote array as payload from the user
  return {
    type: "setVotesArray",
    payload
  }
}