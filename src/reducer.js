import * as actions from './actions';

const initialState = {
    isLoggedIn: false,
    currentUser: '',
    authToken: '',

    showSignupForm: false,
    showSignupCheck: false,

    showSigninForm: false,
    showSigninCheck: false,

    showAddEncounter: false,
    showAddEncounterCheck: false,
    verifyAddEncounterCheck: true,

    showEditEncounter: false,
    currentEditForm: 0,
    editEncounterFields: false,

    showDeleteEncounter: false,
    currentDeleteForm: 0,

    animal: [],
    zoo: [],

    encounters: [],
    encounterType: 'All Animal'

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
            encounters: action.encounters,
            encounterType: 'All Animal'
        })
    }
    if (action.type === actions.GET_ENCOUNTERS_BY_ANIMAL_SUCCESS) {
        return Object.assign({}, state, {
            encounters: action.animalsEncounters,
            encounterType: action.encounterType
        })
    }
    if (action.type === actions.GET_ENCOUNTERS_BY_ZOO_SUCCESS) {
        return Object.assign({}, state, {
           encounters: action.zoosEncounters,
           encounterType: action.encounterType
        })
    }
    if (action.type === actions.SHOW_SIGNUP_FORM) {
        return Object.assign({}, state, {
            showSignupForm: action.change
        })
    }
    if (action.type === actions.SHOW_SIGNUP_CHECK) {
        return Object.assign({}, state, {
            showSignupCheck: true
        })
    }
    if (action.type === actions.SHOW_SIGNIN_FORM) {
        return Object.assign({}, state, {
            showSigninForm: action.change
        })
    }
    if (action.type === actions.SHOW_SIGNIN_CHECK) {
        return Object.assign({}, state, {
            showSigninCheck: true    
        })
    }
    if (action.type === actions.LOGGED_IN_SUCCESS) {
        return Object.assign({}, state, {
            authToken: action.authToken,
            isLoggedIn: true,
            showSigninForm: false,
            showSignupForm: false,
            showSignupCheck: false,
            showSigninCheck: false
        })
    }
    if (action.type === actions.UPDATE_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.username
        })
    }
    if (action.type === actions.SHOW_ADD_ENCOUNTER_FORM) {
        return Object.assign({}, state, {
            showAddEncounter: action.change
        })
    }
    if (action.type === actions.SHOW_ADD_ENCOUNTER_CHECK) {
        return Object.assign({}, state, {
            showAddEncounterCheck: true
        })
    }
    if (action.type === actions.HIDE_ADD_ENCOUNTER_CHECK) {
        return Object.assign({}, state, {
            showAddEncounterCheck: false,
            verifyAddEncounterCheck: false
        })
    }
    if (action.type === actions.ADD_NEW_ENCOUNTER_SUCCESS) {
        return Object.assign({}, state, {
            showAddEncounter: false,
            verifyAddEncounterCheck: true
        })
    }
    if (action.type === actions.SHOW_EDIT_ENCOUNTER_FORM) {
        return Object.assign({}, state, {
            showEditEncounter: action.change,
            currentEditForm: action.currentForm
        })
    }
    if (action.type === actions.EDIT_ENCOUNTER_SUCCESS) {
        return Object.assign({}, state, {
            showEditEncounter: false,
            currentEditForm: 0,
            editEncounterFields: false
        })
    }
    if (action.type === actions.EDIT_ENCOUNTER_FIELDS) {
        return Object.assign({}, state, {
            editEncounterFields: true,
        })
    }
    if (action.type === actions.SHOW_DELETE_ENCOUNTER_FORM) {
        return Object.assign({}, state, {
            showDeleteEncounter: action.change,
            currentDeleteForm: action.currentForm
        })
    }
    if (action.type === actions.DELETE_ENCOUNTER_SUCCESS) {
        return Object.assign({}, state, {
            showDeleteEncounter: false,
            currentDeleteForm: 0
        })
    }
    if (action.type === actions.LOGOUT) {
        return Object.assign({}, state, {
            isLoggedIn: false,
            currentUser: '',
            authToken: '',

            showSignupForm: false,
            showSigninForm: false,

            showAddEncounter: false,
            showAddEncounterCheck: false,

            showEditEncounter: false,
            currentEditForm: 0,
            editEncounterFields: false,

            showDeleteEncounter: false,
            currentDeleteForm: 0,

            encounterType: 'All Animal'
        })
    }

    return state;
}