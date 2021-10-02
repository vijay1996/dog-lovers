import React from "react";
import { Typography, Button } from "@material-ui/core";
import BiColumnGrid from './BiColumnGrid'
import { castVoteViaApi } from '../apiCalls'
import { useSelector } from 'react-redux'

export const DeterminePage = (state, type) => {
    if(state && Object.keys(state).length){
        switch(type) {
            case "list":
                return [...state.dogList] 
            case "topDogs":
                return [...state.topDogs]
            default:
                return [...state.dogList]
        }
    }
}

export const BuildDogCard = (dog) => {
    const displayArray = []
    const unit = useSelector(state => state.unitReducer.unit)
    if (dog && Object.keys(dog).length) {
        if (dog.url) {
            displayArray.push(<img src={dog.url} alt="Dog" style={{width:"100%", height:"250px", objectFit:"cover"}} key={dog.url} />)
        }
        if(dog.breeds && dog.breeds.length && dog.breeds[0].name) {
            displayArray.push(<Typography variant="h6">{dog.breeds[0].name}</Typography>)
        } else {
            displayArray.push(<Typography variant="h6">Name not available</Typography>)
        }
        if(dog.id) {
            displayArray.push(
                <div style={{width:"100%", textAlign:"left", margin: "3%"}}>
                    <Button variant="outlined" color="primary" onClick={()=>castVoteViaApi({image_id: dog.id, value: 1})}>Like</Button>
                </div>
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
    return displayArray
}