import {API_BASE_URL} from './config';

import {
    GET_ANIMALS_SUCCESS,
    getAnimalsSuccess,
    GET_ZOOS_SUCCESS,
    getZoosSuccess,
    GET_ALL_ENCOUNTERS_SUCCESS,
    getAllEncountersSuccess,
    GET_ENCOUNTERS_BY_ANIMAL_SUCCESS,
    getEncountersByAnimalSuccess,
    GET_ENCOUNTERS_BY_ZOO_SUCCESS,
    getEncountersByZooSuccess,
    SHOW_SIGNUP_FORM,
    showSignupForm,
    SHOW_SIGNIN_FORM,
    showSigninForm,
    SHOW_ADD_ENCOUNTER_FORM,
    showAddEncounterForm,
    ADD_NEW_ENCOUNTER_SUCCESS,
    addNewEncounterSuccess,
    EDIT_ENCOUNTER_FIELDS,
    editEncounterFields,
    EDIT_ENCOUNTER_SUCCESS,
    editEncounterSuccess,
    SHOW_EDIT_ENCOUNTER_FORM,
    showEditEncounterForm,
    SHOW_DELETE_ENCOUNTER_FORM,
    showDeleteEncounterForm,
    DELETE_ENCOUNTER_SUCCESS,
    deleteEncounterSuccess,
    LOGOUT,
    logout,
    SHOW_ADD_ENCOUNTER_CHECK,
    showAddEncounterCheck,
    HIDE_ADD_ENCOUNTER_CHECK,
    hideAddEncounterCheck,
    SHOW_SIGNUP_CHECK,
    showSignupCheck,
    SHOW_SIGNIN_CHECK,
    showSigninCheck,
    LOGGED_IN_SUCCESS,
    loggedInSuccess,
    UPDATE_CURRENT_USER,
    updateCurrentUser,
    getAnimals,
    getZoos,
    getAllEncounters,
    getEncountersByAnimal,
    getEncountersByZoo,
    signup,
    login,
    addNewEncounter,
    editEncounter,
    deleteEncounter

} from './actions.js'

describe('getAnimalsSuccess', () => {
    it('Should return the action', () => {
        const animals = ['Kangaroo', 'Panda']
        const action = getAnimalsSuccess(animals);
        expect(action.type).toEqual(GET_ANIMALS_SUCCESS);
        expect(action.animals).toEqual(animals);
    })
})

describe('getZoosSuccess', () => {
    it('Should return the action', () => {
        const zoos = ['SeaWorld San Diego', 'Bronx Zoo']
        const action = getZoosSuccess(zoos);
        expect(action.type).toEqual(GET_ZOOS_SUCCESS);
        expect(action.zoos).toEqual(zoos);
    })
})

describe('getAllEncountersSuccess', () => {
    it('Should return the action', () => {
        const encounters =[
            {
                animal : "KANGAROO",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/kangaroo-feeding.jpeg",
                encounterName : "Kangaroo Feeding",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "Free",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.",
                addedBy : "user1"
            },
            {
                animal : "KOALA",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/koala-encounter.jpg",
                encounterName : "Koala Encounter",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "$25 AUD",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors pose for a photo with a koala. You may pet the koala, but it is illegal to hold koalas without the proper certification in New South Wales.",
                addedBy : "user2"
            }
        ]
        const action = getAllEncountersSuccess(encounters);
        expect(action.type).toEqual(GET_ALL_ENCOUNTERS_SUCCESS);
        expect(action.encounters).toEqual(encounters);
    })
})

describe('getEncountersByAnimalSuccess', () => {
    it('Should return the action', () => {
        const encounterType = 'Kangaroo'
        const animalsEncounters = [
            {
                animal : "KANGAROO",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/kangaroo-feeding.jpeg",
                encounterName : "Kangaroo Feeding",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "Free",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.",
                addedBy : "user1"
            }
        ]
        const action = getEncountersByAnimalSuccess(animalsEncounters, encounterType);
        expect(action.type).toEqual(GET_ENCOUNTERS_BY_ANIMAL_SUCCESS);
        expect(action.animalsEncounters).toEqual(animalsEncounters);
        expect(action.encounterType).toEqual(encounterType);
    })
})

describe('getEncountersByZooSuccess', () => {
    it('Should return the action', () => {
        const encounterType = 'Featherdale Wildlife Park'
        const zoosEncounters = [
            {
                animal : "KANGAROO",
                encounterImage: "https://featured-creatures-api.herokuapp.com/images/kangaroo-feeding.jpeg",
                encounterName : "Kangaroo Feeding",
                zooName : "FEATHERDALE WILDLIFE PARK",
                zooWebsite : "https://www.featherdale.com.au/",
                zooLocation: "Sydney, Australia",
                encounterCost : "Free",
                encounterSchedule : "Everyday",
                encounterDescription : "Visitors can buy kangaroo feed for $2 and hand feed the kangaroos inside their enclosure.",
                addedBy : "user1"
            }
        ]
        const action = getEncountersByZooSuccess(zoosEncounters, encounterType);
        expect(action.type).toEqual(GET_ENCOUNTERS_BY_ZOO_SUCCESS);
        expect(action.zoosEncounters).toEqual(zoosEncounters);
        expect(action.encounterType).toEqual(encounterType);
    })
})

describe('showSignupForm', () => {
    it('Should return the action', () => {
        const change = true;
        const action = showSignupForm(change);
        expect(action.type).toEqual(SHOW_SIGNUP_FORM);
        expect(action.change).toEqual(change);
    })
})

describe('showSigninForm', () => {
    it('Should return the action', () => {
        const change = true;
        const action = showSigninForm(change);
        expect(action.type).toEqual(SHOW_SIGNIN_FORM);
        expect(action.change).toEqual(change);
    })
})

describe('showAddEncounterForm', () => {
    it('Should return the action', () => {
        const change = true
        const action = showAddEncounterForm(change);
        expect(action.type).toEqual(SHOW_ADD_ENCOUNTER_FORM);
        expect(action.change).toEqual(change);
    })
})

describe('addNewEncounterSuccess', () => {
    it('Should return the action', () => {
        const action = addNewEncounterSuccess();
        expect(action.type).toEqual(ADD_NEW_ENCOUNTER_SUCCESS);
    })
})

describe('editEncounterSuccess', () => {
    it('Should return the action', () => {
        const action = editEncounterSuccess();
        expect(action.type).toEqual(EDIT_ENCOUNTER_SUCCESS);
    })
})

describe('editEncounterFields', () => {
    it('Should return the action', () => {
        const action = editEncounterFields();
        expect(action.type).toEqual(EDIT_ENCOUNTER_FIELDS);
    })
})

describe('showEditEncounterForm', () => {
    it('Should return the action', () => {
        const change = true;
        const currentForm = 1;
        const action = showEditEncounterForm(change, currentForm);
        expect(action.type).toEqual(SHOW_EDIT_ENCOUNTER_FORM);
        expect(action.change).toEqual(change);
        expect(action.currentForm).toEqual(currentForm);
    })
})

describe('showDeleteEncounterForm', () => {
    it('Should return the action', () => {
        const change = true;
        const currentForm = 1;
        const action = showDeleteEncounterForm(change, currentForm);
        expect(action.type).toEqual(SHOW_DELETE_ENCOUNTER_FORM);
        expect(action.change).toEqual(change);
        expect(action.currentForm).toEqual(currentForm);
    })
})

describe('deleteEncounterSuccess', () => {
    it('Should return the action', () => {
        const action = deleteEncounterSuccess();
        expect(action.type).toEqual(DELETE_ENCOUNTER_SUCCESS);
    })
})

describe('logout', () => {
    it('Should return the action', () => {
        const action = logout();
        expect(action.type).toEqual(LOGOUT);
    })
})

describe('showAddEncounterCheck', () => {
    it('Should return the action', () => {
        const action = showAddEncounterCheck();
        expect(action.type).toEqual(SHOW_ADD_ENCOUNTER_CHECK);
    })
})

describe('hideAddEncounterCheck', () => {
    it('Should return the action', () => {
        const action = hideAddEncounterCheck();
        expect(action.type).toEqual(HIDE_ADD_ENCOUNTER_CHECK);
    })
})

describe('showSignupCheck', () => {
    it('Should return the action', () => {
        const action = showSignupCheck();
        expect(action.type).toEqual(SHOW_SIGNUP_CHECK);
    })
})

describe('showSigninCheck', () => {
    it('Should return the action', () => {
        const action = showSigninCheck();
        expect(action.type).toEqual(SHOW_SIGNIN_CHECK);
    })
})

describe('loggedInSuccess', () => {
    it('Should return the action', () => {
        const authToken = '';
        const action = loggedInSuccess(authToken);
        expect(action.type).toEqual(LOGGED_IN_SUCCESS);
        expect(action.authToken).toEqual(authToken);
    })
})

describe('updateCurrentUser', () => {
    it('Should return the action', () => {
        const username = '';
        const action = updateCurrentUser(username);
        expect(action.type).toEqual(UPDATE_CURRENT_USER);
        expect(action.username).toEqual(username);
    })
})

describe('getAnimals', () => {
    it('Should dispatch getAnimalsSuccess', () => {
        const url = `${API_BASE_URL}/animals`;
        const animals = []

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return animals;
                }
            })
        );
        
        const dispatch = jest.fn();
        return getAnimals()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url);
            expect(dispatch).toHaveBeenCalledWith(getAnimalsSuccess(animals));
        });
    })
})

describe('getZoos', () => {
    it('Should dispatch getZoosSuccess', () => {
        const url = `${API_BASE_URL}/zoos`;
        const zoos = []

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return zoos;
                }
            })
        );
        
        const dispatch = jest.fn();
        return getZoos()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url);
            expect(dispatch).toHaveBeenCalledWith(getZoosSuccess(zoos));
        });
    })
})

describe('getAllEncounters', () => {
    it('Should dispatch getAllEncountersSuccess', () => {
        const url = `${API_BASE_URL}/encounters`;
        const encounters = [];

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return encounters;
                }
            })
        );
        
        const dispatch = jest.fn();
        return getAllEncounters()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url);
            expect(dispatch).toHaveBeenCalledWith(getAllEncountersSuccess(encounters));
        });
    })
})

describe('getEncountersByAnimal', () => {
    it('Should dispatch getEncountersByAnimalSuccess', () => {
        const term = 'Kangaroo'
        const url = `${API_BASE_URL}/animal/${term}`;
        const animalsEncounters = [];
        const encounterType = term;

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return animalsEncounters;
                }
            })
        );
        
        const dispatch = jest.fn();
        return getEncountersByAnimal(term)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url);
            expect(dispatch).toHaveBeenCalledWith(getEncountersByAnimalSuccess(animalsEncounters, encounterType));
        });
    })
})

describe('getEncountersByZoo', () => {
    it('Should dispatch getEncountersByZooSuccess', () => {
        const term = 'Bronx Zoo'
        const url = `${API_BASE_URL}/zoo/${term}`;
        const zoosEncounters = [];
        const encounterType = term;

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return zoosEncounters;
                }
            })
        );
        
        const dispatch = jest.fn();
        return getEncountersByZoo(term)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url);
            expect(dispatch).toHaveBeenCalledWith(getEncountersByZooSuccess(zoosEncounters, encounterType));
        });
    })
})

describe('Signup', () => {
    it('Should dispatch login', () => {
        const user = {};
        const userData = user;
        const url = `${API_BASE_URL}/users`;
        const info = {}

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return info;
                }
            })
        );
        
        const dispatch = jest.fn();
        return signup(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url, {"body": "{}", "headers": {"content-type": "application/json"}, "method": "POST"});
        });
    })
})

describe('Login', () => {
    it('Should dispatch loggedInSuccess and updateCurrentUser', () => {
        const user = {username: ''};
        const username = user.username;
        const url = `${API_BASE_URL}/auth/login`;
        const authToken = ''

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return authToken;
                }
            })
        );
        
        const dispatch = jest.fn();
        return login(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url, {"body": "{\"username\":\"\"}", "headers": {"content-type": "application/json"}, "method": "POST"});
            expect(dispatch).toHaveBeenCalledWith(loggedInSuccess(authToken));
            expect(dispatch).toHaveBeenCalledWith(updateCurrentUser(username));
        });
    })
})

describe('AddEncounter', () => {
    it('Should dispatch addNewEncounterSucccess', () => {
        const token = {authToken: ''}
        const authToken = token.authToken;
        const encounter = {};
        const url = `${API_BASE_URL}/encounters`;

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return encounter;
                }
            })
        );
        
        const dispatch = jest.fn();
        return addNewEncounter(encounter, token)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url, {"body": "{}", "headers": {"content-type": "application/json", Authorization: `Bearer ${authToken}`}, "method": "POST"});
            expect(dispatch).toHaveBeenCalledWith(addNewEncounterSuccess());
        });
    })
})

describe('EditEncounter', () => {
    it('Should dispatch editEncounterSucccess', () => {
        const token = {authToken: ''}
        const authToken = token.authToken;
        const encounter = {};
        const id = ''
        const url = `${API_BASE_URL}/encounters/${id}`;

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        
        const dispatch = jest.fn();
        return editEncounter(encounter, token, id)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url, {"body": "{}", "headers": {"content-type": "application/json", Authorization: `Bearer ${authToken}`}, "method": "PUT"});
            expect(dispatch).toHaveBeenCalledWith(editEncounterSuccess());
        });
    })
})

describe('DeleteEncounter', () => {
    it('Should dispatch deleteEncounterSucccess', () => {
        const token = {authToken: ''}
        const authToken = token.authToken;
        const id = ''
        const url = `${API_BASE_URL}/encounters/${id}`;

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true
            })
        );
        
        const dispatch = jest.fn();
        return deleteEncounter(token, id)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(url, {"headers": {"content-type": "application/json", Authorization: `Bearer ${authToken}`}, "method": "DELETE"});
            expect(dispatch).toHaveBeenCalledWith(deleteEncounterSuccess());
        });
    })
})
