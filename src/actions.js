import {API_BASE_URL} from './config';

export const getAnimals = () => dispatch => {
    fetch(`${API_BASE_URL}/animals`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(animals => {
        dispatch(getAnimalsSuccess(animals));
    });
};

export const GET_ANIMALS_SUCCESS = 'GET_ANIMALS_SUCCESS';
export const getAnimalsSuccess = animals => ({
    type: GET_ANIMALS_SUCCESS,
    animals
});

export const getZoos = () => dispatch => {
    fetch(`${API_BASE_URL}/zoos`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(zoos => {
        dispatch(getZoosSuccess(zoos));
    });
};

export const GET_ZOOS_SUCCESS = 'GET_ZOOS_SUCCESS';
export const getZoosSuccess = zoos => ({
    type: GET_ZOOS_SUCCESS,
    zoos
});

export const getEncounters = (term) => dispatch => {
    console.log(`dispatched with ${term}`)
    fetch(`${API_BASE_URL}/animal/${term}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(encounters => {
        console.log(`returned json is ${encounters}`);
        dispatch(getEncountersSuccess(encounters));
    });
};

export const GET_ENCOUNTERS_SUCCESS = 'GET_ENCOUNTERS_SUCCESS';
export const getEncountersSuccess = encounters => ({
    type: GET_ENCOUNTERS_SUCCESS,
    encounters
});