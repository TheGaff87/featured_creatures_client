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

export const SHOW_SIGNIN_FORM = 'SHOW_SIGNIN_FORM';
export const showSigninForm = (change) => ({
    type: SHOW_SIGNIN_FORM,
    change
});

export const signup = user => {
    fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    })
};

export const login = user => dispatch => {
    const username = user.username;
    fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(authToken => {
        dispatch(loggedInSuccess(authToken));
        dispatch(updateCurrentUser(username))
    });
};

export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export const loggedInSuccess = (authToken) => ({
    type: LOGGED_IN_SUCCESS,
    authToken
});

export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';
export const updateCurrentUser = (username) => ({
    type: UPDATE_CURRENT_USER,
    username
})