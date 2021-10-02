// This component takes details of an individual dog and returns an aesthetic card to display its details.

import { Paper } from '@material-ui/core'
import { BuildDogCard } from './Functions'

const Dog = ({dog}) => {

    const displayArray = BuildDogCard(dog)

    return (
        <Paper style={{margin: "5%", minHeight: "80vh"}}>
            {displayArray && displayArray.length > 0 && displayArray}
        </Paper>
    )
}

export default Dog