//A react component that just acts as a repository of functions used to enforce business logic in the app.

import React from "react";
import { Typography } from "@material-ui/core";
import BiColumnGrid from './BiColumnGrid'

export const DetermineVotes = (voteList,dogList) => {
    let votesArray = []
    if(voteList && voteList.length && dogList && dogList.length) {
        votesArray = dogList.map(dog => {
            return voteList.filter(vote => {
                return vote.image_id === dog.id
            }).length
        })
    }   
    return votesArray
}

export const BuildDogCard = (dog, unit) => {

    //Accepts dog object and builds an array which gets displayed as a card that contains the details of the dog.
    const displayArray = []
    if (dog && Object.keys(dog).length) {
        if (dog.url) {
            displayArray.push(<img src={dog.url} alt="Dog" style={{width:"100%", height:"250px", objectFit:"cover"}} key={dog.url} />)
        }

        if(dog.breeds && dog.breeds.length && dog.breeds[0].name) {
            displayArray.push(<Typography key={0} title="name" variant="h6">{dog.breeds[0].name}</Typography>)
        } else {
            displayArray.push(<Typography key={0} title="name" variant="h6">Name not available</Typography>)
        }

        if (dog.breeds && dog.breeds.length) {
            if (dog.breeds[0].life_span){
                displayArray.push(<BiColumnGrid key={1} row1="Life span" row2={dog.breeds[0].life_span} />)
            } else {
                displayArray.push(<BiColumnGrid key={1} row1="Life span" row2="Not available" />)
            }

            if (dog.breeds[0].bred_for) {
                displayArray.push(<BiColumnGrid key={2} row1="Bred for" row2={dog.breeds[0].bred_for} />)
            } else {
                displayArray.push(<BiColumnGrid key={2} row1="Bred for" row2="Not available" />)
            }

            if (dog.breeds[0].breed_group) {
                displayArray.push(<BiColumnGrid key={3} row1="Breed group" row2={dog.breeds[0].breed_group} />)
            } else {
                displayArray.push(<BiColumnGrid key={3} row1="Breed group" row2="Not available" />)
            }

            if (dog.breeds[0].height) {
                if (dog.breeds[0].height[unit]){
                    displayArray.push(<BiColumnGrid key={4} row1="Height" row2={`${dog.breeds[0].height[unit]} ${(unit==='imperial')? 'Inches': 'Centimeters'}`} />)
                } else {
                    displayArray.push(<BiColumnGrid key={4} row1="Height" row2="Not available" />)    
                }
            } else {
                displayArray.push(<BiColumnGrid key={4} row1="Height" row2="Not available" />)
            }
            
            if (dog.breeds[0].weight) {
                if (dog.breeds[0].weight[unit]){
                    displayArray.push(<BiColumnGrid key={5} row1="Weight" row2={`${dog.breeds[0].weight[unit]} ${(unit==='imperial')? 'Lbs': 'Kgs'}`} />)
                } else {
                    displayArray.push(<BiColumnGrid key={5} row1="Weight" row2="Not available" />)    
                }
            } else {
                displayArray.push(<BiColumnGrid key={6} row1="Weight" row2="Not available" />)
            }

            if (dog.breeds[0].temperament) {
                displayArray.push(<BiColumnGrid key={7} row1="Temperament" row2={dog.breeds[0].temperament} />)
            } else {
                displayArray.push(<BiColumnGrid key={7} row1="Temperament" row2="Not available" />)
            }

        } else {
            displayArray.push(<BiColumnGrid key={1} row1="Life span" row2="Not available" />)
            displayArray.push(<BiColumnGrid key={2} row1="Bred for" row2="Not available" />)
            displayArray.push(<BiColumnGrid key={3} row1="Breed group" row2="Not available" />)
            displayArray.push(<BiColumnGrid key={4} row1="Height" row2="Not available" />)
            displayArray.push(<BiColumnGrid key={5} row1="Weight" row2="Not available" />)
            displayArray.push(<BiColumnGrid key={6} row1="Temperament" row2="Not available" />)
        }
    }
    return displayArray
}