//This component creates and displays the list of dogs that has to be shown in the component.

import { useSelector } from "react-redux"

const DogList = ({type="list"}) => {
    const state = useSelector(state => state)
    let dogList = []
    
    if(state && Object.keys(state).length){
        switch(type) {
            case "list":
                dogList = [...state.dogList]
                break 
            case "topDogs":
                dogList = [...state.topDogs]
                break
            default:
                dogList = [...state.dogList]
                break
        }
    }

    const dogArray = dogList && dogList.length && dogList.map(dog => {
        return dog
    })
    console.log(dogArray)

    return (
        <div>
            Hi
        </div>
    )
}

export default DogList