import * as actions from './actions';

const initialState = {
    isLoggedIn: false,
    currentUser: "",

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


    return state;
}