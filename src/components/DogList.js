//This component creates and displays the list of dogs that has to be shown in the component.

import { useSelector } from "react-redux"
import { useState } from 'react'
import Dog from "./Dog"
import { Grid } from "@material-ui/core"
import { DetermineVotes } from "./Functions"

const DogList = ({type="list"}) => {
    const state = useSelector(state => state)
    let dogList = state.dogListReducer.dogList
    let voteList = DetermineVotes(state.votesArrayReducer.votesArray, dogList)
    let [updateVoteList, setUpdateVoteList] = useState(true)
    return (
        <Grid container spacing={2}>
            {dogList && dogList.length && dogList.map(dog => {
                return (
                    <Grid key={dog.id && dog.id} item lg={3} md={4} sm={6} xs={12}>
                        <Dog dog={dog} votes={voteList[dogList.indexOf(dog)]} index={dogList.indexOf(dog)}  updateVotes={()=>{setUpdateVoteList(!updateVoteList)}} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DogList