import { dogListReducer, unitReducer, votesArrayReducer } from '../app/reducers';
import { setDogList, setUnit, setVotesArray } from '../app/actions';

test('Dog list reducer works fine', () => {
    expect(JSON.stringify(
        dogListReducer({}, setDogList({dogName: "dog"}))
    )).toEqual('{\"dogList\":{\"dogName\":\"dog\"}}')
})

test('Unit reducer works fine', () => {
    expect(JSON.stringify(
        unitReducer({}, setUnit({unit: "imperial"}))
    )).toEqual('{\"unit\":{\"unit\":\"imperial\"}}')
})

test('Votes array reducer works fine', () => {
    expect(JSON.stringify(
        votesArrayReducer({}, setVotesArray({votesArray: []}))
    )).toEqual('{\"votesArray\":{\"votesArray\":[]}}')
})