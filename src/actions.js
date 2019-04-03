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
    const encounterType = term;
    fetch(`${API_BASE_URL}/animal/${term}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(animalsEncounters => {
        dispatch(getEncountersByAnimalSuccess(animalsEncounters, encounterType));
    });
};

export const GET_ENCOUNTERS_BY_ANIMAL_SUCCESS = 'GET_ENCOUNTERS_BY_ANIMAL_SUCCESS';
export const getEncountersByAnimalSuccess = (animalsEncounters, encounterType) => ({
    type: GET_ENCOUNTERS_BY_ANIMAL_SUCCESS,
    animalsEncounters,
    encounterType
});

export const getEncountersByZoo = (term) => dispatch => {
    const encounterType = term;
    fetch(`${API_BASE_URL}/zoo/${term}`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(zoosEncounters => {
        dispatch(getEncountersByZooSuccess(zoosEncounters, encounterType));
    });
};

export const GET_ENCOUNTERS_BY_ZOO_SUCCESS = 'GET_ENCOUNTERS_BY_ZOO_SUCCESS';
export const getEncountersByZooSuccess = (zoosEncounters, encounterType) => ({
    type: GET_ENCOUNTERS_BY_ZOO_SUCCESS,
    zoosEncounters,
    encounterType
});

export const SHOW_SIGNUP_FORM = 'SHOW_SIGNUP_FORM';
export const showSignupForm = (change) => ({
    type: SHOW_SIGNUP_FORM,
    change
});

export const SHOW_SIGNIN_FORM = 'SHOW_SIGNIN_FORM';
export const showSigninForm = (change) => ({
    type: SHOW_SIGNIN_FORM,
    change
});

export const signup = user =>dispatch => {
    const userData = user;
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
    }).then(() => {
        dispatch(login(userData))
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
            dispatch(showSigninCheck());
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

export const SHOW_ADD_ENCOUNTER_FORM = 'SHOW_ADD_ENCOUNTER_FORM';
export const showAddEncounterForm = (change) => ({
    type: SHOW_ADD_ENCOUNTER_FORM,
    change
});

export const addNewEncounter = (encounter, token) => dispatch => {
    const authToken = token.authToken;
    fetch(`${API_BASE_URL}/encounters`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(encounter)
    })
    .then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(() => {
        dispatch(getAnimals());
        dispatch(getZoos());
        dispatch(getAllEncounters());
        dispatch(addNewEncounterSuccess())
    });
};

export const ADD_NEW_ENCOUNTER_SUCCESS = 'ADD_NEW_ENCOUNTER_SUCCESS';
export const addNewEncounterSuccess = () => ({
    type: ADD_NEW_ENCOUNTER_SUCCESS
})

export const SHOW_EDIT_ENCOUNTER_FORM = 'SHOW_EDIT_ENCOUNTER_FORM';
export const showEditEncounterForm = (change, currentForm) => ({
    type: SHOW_EDIT_ENCOUNTER_FORM,
    change,
    currentForm
});

export const editEncounter = (encounter, token, id) => dispatch => {
    const authToken = token.authToken;
    fetch(`${API_BASE_URL}/encounters/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(encounter)
    })
    .then(() => {
        dispatch(getAllEncounters());
        dispatch(editEncounterSuccess())
    });
};

export const EDIT_ENCOUNTER_SUCCESS = 'EDIT_ENCOUNTER_SUCCESS';
export const editEncounterSuccess = () => ({
    type: EDIT_ENCOUNTER_SUCCESS
})

export const EDIT_ENCOUNTER_FIELDS = 'EDIT_ENCOUNTER_FIELDS';
export const editEncounterFields = () => ({
    type: EDIT_ENCOUNTER_FIELDS
})

export const SHOW_DELETE_ENCOUNTER_FORM = 'SHOW_DELETE_ENCOUNTER_FORM';
export const showDeleteEncounterForm = (change, currentForm) => ({
    type: SHOW_DELETE_ENCOUNTER_FORM,
    change,
    currentForm
});

export const deleteEncounter = (token, id) => dispatch => {
    const authToken = token.authToken;
    fetch(`${API_BASE_URL}/encounters/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${authToken}`
        }
    })
    .then(() => {
        dispatch(getAnimals());
        dispatch(getZoos());
        dispatch(getAllEncounters());
        dispatch(deleteEncounterSuccess())
    });
};

export const DELETE_ENCOUNTER_SUCCESS = 'DELETE_ENCOUNTER_SUCCESS';
export const deleteEncounterSuccess = () => ({
    type: DELETE_ENCOUNTER_SUCCESS
})

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT
})

export const SHOW_ADD_ENCOUNTER_CHECK = 'SHOW_ADD_ENCOUNTER_CHECK';
export const showAddEncounterCheck = () => ({
    type: SHOW_ADD_ENCOUNTER_CHECK
})

export const HIDE_ADD_ENCOUNTER_CHECK = 'HIDE_ADD_ENCOUNTER_CHECK';
export const hideAddEncounterCheck = () => ({
    type: HIDE_ADD_ENCOUNTER_CHECK
})

export const SHOW_SIGNUP_CHECK = 'SHOW_SIGNUP_CHECK';
export const showSignupCheck = () => ({
    type: SHOW_SIGNUP_CHECK
})

export const SHOW_SIGNIN_CHECK= 'SHOW_SIGNIN_CHECK';
export const showSigninCheck = () => ({
    type: SHOW_SIGNIN_CHECK
})
