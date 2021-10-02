// This component takes details of an individual dog and returns an aesthetic card to display its details.

import { Button, Grid, Paper, Typography } from '@material-ui/core'
import BiColumnGrid from './BiColumnGrid'
import { useSelector } from 'react-redux'

const Dog = ({dog}) => {

    const displayArray = []
    const unit = useSelector(state => state.unitReducer.unit)
    
    if (dog && Object.keys(dog).length) {
        if (dog.url) {
            displayArray.push(<img src={dog.url} alt="Dog" style={{width:"100%", height:"250px", objectFit:"cover"}} key={dog.url} />)
        }
        if(dog.breeds && dog.breeds.length && dog.breeds[0].name) {
            displayArray.push(<Typography variant="h6">{dog.breeds[0].name}</Typography>,<br />)
        } else {
            displayArray.push(<Typography variant="h6">Name not available</Typography>,<br />)
        }
        if(dog.id) {
            displayArray.push(
                <Grid container spacing={2} style={{paddingLeft: "4%"}}>
                    <Grid item sm={4} style={{textAlign: "right"}}><Button variant="outlined" color="primary">Upvote</Button></Grid>
                    <Grid item sm={8} style={{textAlign: "left"}}><Button variant="outlined" color="secondary">Downvote</Button></Grid>
                </Grid>
            )
        }
        if (dog.breeds && dog.breeds.length) {
            if (dog.breeds[0].life_span){
                displayArray.push(<BiColumnGrid row1="Life span" row2={dog.breeds[0].life_span} />)
            } else {
                displayArray.push(<BiColumnGrid row1="Life span" row2="Not available" />)
            }

            if (dog.breeds[0].bred_for) {
                displayArray.push(<BiColumnGrid row1="Bred for" row2={dog.breeds[0].bred_for} />)
            } else {
                displayArray.push(<BiColumnGrid row1="Bred for" row2="Not available" />)
            }

            if (dog.breeds[0].breed_group) {
                displayArray.push(<BiColumnGrid row1="Breed group" row2={dog.breeds[0].breed_group} />)
            } else {
                displayArray.push(<BiColumnGrid row1="Breed group" row2="Not available" />)
            }

            if (dog.breeds[0].height) {
                if (dog.breeds[0].height[unit]){
                    displayArray.push(<BiColumnGrid row1="Height" row2={`${dog.breeds[0].height[unit]} ${(unit==='imperial')? 'Inches': 'Centimeters'}`} />)
                } else {
                    displayArray.push(<BiColumnGrid row1="Height" row2="Not available" />)    
                }
            } else {
                displayArray.push(<BiColumnGrid row1="Height" row2="Not available" />)
            }
            
            if (dog.breeds[0].weight) {
                if (dog.breeds[0].weight[unit]){
                    displayArray.push(<BiColumnGrid row1="Weight" row2={`${dog.breeds[0].weight[unit]} ${(unit==='imperial')? 'Lbs': 'Kgs'}`} />)
                } else {
                    displayArray.push(<BiColumnGrid row1="Weight" row2="Not available" />)    
                }
            } else {
                displayArray.push(<BiColumnGrid row1="Weight" row2="Not available" />)
            }

            if (dog.breeds[0].temperament) {
                displayArray.push(<BiColumnGrid row1="Temperament" row2={dog.breeds[0].temperament} />)
            } else {
                displayArray.push(<BiColumnGrid row1="Temperament" row2="Not available" />)
            }

        } else {
            displayArray.push(<BiColumnGrid row1="Life span" row2="Not available" />)
            displayArray.push(<BiColumnGrid row1="Bred for" row2="Not available" />)
            displayArray.push(<BiColumnGrid row1="Breed group" row2="Not available" />)
            displayArray.push(<BiColumnGrid row1="Height" row2="Not available" />)
            displayArray.push(<BiColumnGrid row1="Weight" row2="Not available" />)
            displayArray.push(<BiColumnGrid row1="Temperament" row2="Not available" />)
        }
    }

    return (
        <Paper style={{margin: "5%", minHeight: "80vh"}}>
            {displayArray && displayArray.length > 0 && displayArray}
        </Paper>
    )
}

export default Dog