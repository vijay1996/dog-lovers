// This component takes details of an individual dog and returns an aesthetic card to display its details.

import { Paper } from '@material-ui/core'

const Dog = ({dog}) => {

    const displayArray = []
    
    if (dog && Object.keys(dog).length) {
        if (dog.url) {
            displayArray.push(<img src={dog.url} alt="Dog" style={{width:"100%", height:"250px", objectFit:"cover"}} key={dog.url} />)
        }
        if(dog.id) {

        }
    }

    return (
        <Paper>
            {displayArray && displayArray.length > 0 && displayArray}
        </Paper>
    )
}

export default Dog