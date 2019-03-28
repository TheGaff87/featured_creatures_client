import * as actions from './actions';

const initialState = {
    isLoggedIn: false,
    currentUser: '',
    authToken: '',

    showSignupForm: false,
    showSigninForm: false,

    showAddEncounter: false,

    showEditEncounter: false,
    currentEditForm: 0,
    editEncounterFields: false,

    showDeleteEncounter: false,
    currentDeleteForm: 0,

    animal: [],
    zoo: [],

    encounters: [
        {
            animal : "Kangaroo",
            encounterImage: "https://featured-creatures-api.herokuapp.com/images/kangaroo-feeding.jpeg",
            encounterName : "Kangaroo Feeding",
            zooName : "Featherdale Wildlife Park",
            zooWebsite : "https://www.featherdale.com.au/",
            zooLocation: "Sydney, Australia",
            encounterCost : "Free",
            encounterSchedule : "Everyday",
            encounterDescription : "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.",
            addedBy : "user1"
        }
    ]

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
    if (action.type === actions.SHOW_SIGNUP_FORM) {
        return Object.assign({}, state, {
            showSignUpForm: action.change
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
    if (action.type === actions.SHOW_ADD_ENCOUNTER_FORM) {
        return Object.assign({}, state, {
            showAddEncounter: action.change
        })
    }
    if (action.type === actions.ADD_NEW_ENCOUNTER_SUCCESS) {
        return Object.assign({}, state, {
            showAddEncounter: false
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


    return state;
}