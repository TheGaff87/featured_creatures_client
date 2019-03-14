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

export const getAllEncounters = () => dispatch => {
    fetch(`${API_BASE_URL}/encounters`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(encounters => {
        dispatch(getAllEncountersSuccess(encounters));
        console.log(`encounters length is ${encounters.length}`)
    });
};

export const GET_ALL_ENCOUNTERS_SUCCESS = 'GET_ALL_ENCOUNTERS_SUCCESS';
export const getAllEncountersSuccess = encounters => ({
    type: GET_ALL_ENCOUNTERS_SUCCESS,
    encounters
})

export const getEncountersByAnimal = (term) => dispatch => {
    fetch(`${API_BASE_URL}/animal/${term}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(animalsEncounters => {
        dispatch(getEncountersByAnimalSuccess(animalsEncounters));
    });
};

export const GET_ENCOUNTERS_BY_ANIMAL_SUCCESS = 'GET_ENCOUNTERS_BY_ANIMAL_SUCCESS';
export const getEncountersByAnimalSuccess = animalsEncounters => ({
    type: GET_ENCOUNTERS_BY_ANIMAL_SUCCESS,
    animalsEncounters
});

export const getEncountersByZoo = (term) => dispatch => {
    fetch(`${API_BASE_URL}/zoo/${term}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(zoosEncounters => {
        dispatch(getEncountersByZooSuccess(zoosEncounters));
    });
};

export const GET_ENCOUNTERS_BY_ZOO_SUCCESS = 'GET_ENCOUNTERS_BY_ZOO_SUCCESS';
export const getEncountersByZooSuccess = zoosEncounters => ({
    type: GET_ENCOUNTERS_BY_ZOO_SUCCESS,
    zoosEncounters
});