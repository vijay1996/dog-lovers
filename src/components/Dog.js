// This component takes details of an individual dog and returns an aesthetic card to display its details.

import { Paper, Button } from '@material-ui/core'
import { BuildDogCard } from './Functions'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { castVoteViaApi } from '../apiCalls'

const Dog = ({dog, votes}) => {
    const unit = useSelector(state => state.unitReducer.unit)
    const [liveVote, setLiveVote] = useState(votes)
    const displayArray = BuildDogCard(dog, liveVote, unit, setLiveVote)

    const onVote = () => {
        castVoteViaApi({image_id: dog.id, value: 1})
        setLiveVote(liveVote+1)
    }

    return (
        <Paper style={{margin: "5%", minHeight: "80vh"}}>
            {displayArray && displayArray.length > 0 && displayArray}
            <br/>
            <div style={{width:"100%", textAlign:"center", margin: "3%"}}><Button variant="outlined" color="primary" onClick={()=>onVote()}>Like | {liveVote}</Button></div>
            <br/>
        </Paper>
    )
}

export default Dog