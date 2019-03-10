import * as actions from './actions';

const initialState = {
    isLoggedIn: false,
    currentUser: "",

    showSigninForm: false,
    showAddEncounter: false,
    showEditEncounter: false,

    animal: [],
    zoo: [],

    encounters: [
        {
            animal: "Kangaroo",
            encounterImage: "images/kangaroo-feeding.jpeg",
            encounterName: "Kangaroo Feeding",
            zooName: "Featherdale Wildlife Park",
            zooWebsite: "https://www.featherdale.com.au/",
            zooLocation: "Sydney, Australia",
            encounterCost: "Free",
            encounterSchedule: "Everyday",
            encounterDescription: "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure."
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
    if (action.type === actions.GET_ENCOUNTERS_SUCCESS) {
        return Object.assign({}, state, {
            encounters: action.encounters
        })
    }

    return state;
}