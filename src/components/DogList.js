//This component creates and displays the list of dogs that has to be shown in the component.

import { useSelector } from "react-redux"
import Dog from "./Dog"
import { Grid } from "@material-ui/core"

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

    return (
        <Grid container spacing={2}>
            {dogList && dogList.length && dogList.map(dog => {
                return (
                    <Grid item lg={3} md={4} sm={6} xs={12}>
                        <Dog dog={dog} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DogList