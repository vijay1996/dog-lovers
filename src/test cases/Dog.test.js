import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import Dog from '../components/Dog';

const dog = {breeds:[{weight:{imperial:'35 - 40',metric:'16 - 18'},height:{imperial:'13 - 15',metric:'33 - 38'},id:29,name:'Basset Bleu de Gascogne',bred_for:'Hunting on foot.',breed_group:'Hound',life_span:'10 - 14 years',temperament:'Affectionate, Lively, Agile, Curious, Happy, Active',reference_image_id:'dummyId'}],id:'dummyId',url:'https://cdn2.thedogapi.com/images/BkMQll94X_1280.jpg',width:1280,height:853}

test('renders the like button', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/Like/i)).toBeInTheDocument();
});

test('renders the image tag', () => {
    const { getByAltText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByAltText(/Dog/i)).toBeInTheDocument();
});

test('renders the name of the dog', () => {
    const { getByTitle } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByTitle(/name/i)).toBeInTheDocument();
});

test('renders the life span of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/life span/i)).toBeInTheDocument();
});

test('renders the bred for property of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/bred for/i)).toBeInTheDocument();
});

test('renders the breed group of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/breed group/i)).toBeInTheDocument();
});

test('renders the height of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/height/i)).toBeInTheDocument();
});

test('renders the weight of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/weight/i)).toBeInTheDocument();
});

test('renders the temperament of the dog', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={1} />
      </Provider>
    );
    expect(getByText(/temperament/i)).toBeInTheDocument();
});

test('handles click event of the like button', () => {
    const { queryByTitle } = render(
      <Provider store={store}>
        <Dog key={dog && dog.id && dog.id} dog={dog} votes={0} />
      </Provider>
    );
    const btn = queryByTitle("likeButton")
    fireEvent.click(btn)
    expect(btn.innerHTML).toMatch(/Like \| 1/i)
});