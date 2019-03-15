import * as actions from './actions';

const initialState = {
    isLoggedIn: false,
    currentUser: '',
    authToken: '',

    showSigninForm: false,
    showAddEncounter: false,
    showEditEncounter: false,

    animal: [],
    zoo: [],

    encounters: []

};

export default (state = initialState, action) => {
    if (action.type === actions.GET_ANIMALS_SUCCESS) {
        return Object.assign({}, state, {
            animal: action.animals
        })
    }
    if (action.type === actions.GET_ZOOS_SUCCESS) {
        return Object.assign({}, state, {
            zoo: action.zoos
        })
    }
    if (action.type === actions.GET_ALL_ENCOUNTERS_SUCCESS) {
        return Object.assign({}, state, {
            encounters: action.encounters
        })
    }
    if (action.type === actions.GET_ENCOUNTERS_BY_ANIMAL_SUCCESS) {
        return Object.assign({}, state, {
            encounters: action.animalsEncounters
        })
    }
    if (action.type === actions.GET_ENCOUNTERS_BY_ZOO_SUCCESS) {
        return Object.assign({}, state, {
           encounters: action.zoosEncounters
        })
    }
    if (action.type === actions.SHOW_SIGNIN_FORM) {
        return Object.assign({}, state, {
            showSigninForm: action.change
        })
    }
    if (action.type === actions.LOGGED_IN_SUCCESS) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            isLoggedIn: true,
            showSigninForm: false
        })
    }
    if (action.type === actions.UPDATE_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.username
        })
    }

    return state;
}