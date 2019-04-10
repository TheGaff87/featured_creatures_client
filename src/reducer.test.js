import Reducer from './reducer';
import {
    getAnimalsSuccess,
    getZoosSuccess,
    getAllEncountersSuccess,
    getEncountersByAnimalSuccess,
    getEncountersByZooSuccess,
    showSignupForm,
    showSignupCheck,
    showSigninForm,
    showSigninCheck,
    loggedInSuccess,
    updateCurrentUser,
    showAddEncounterForm,
    showAddEncounterCheck,
    hideAddEncounterCheck,
    addNewEncounterSuccess,
    showEditEncounterForm,
    editEncounterSuccess,
    editEncounterFields,
    showDeleteEncounterForm,
    deleteEncounterSuccess,
    logout
} from './actions.js';

describe ('Reducer', () => {
    const encounters = [
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
    ];
    
    const kangarooEncounters = [
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
    ];

    const animals = ['Panda', 'Kangaroo', 'Koala'];
    const zoos = ['Bronx Zoo', 'SeaWorld San Diego', 'Melbourne Zoo'];

    it('Should set the initial state when nothing is passed in', () => {
        const state = Reducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
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
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = Reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('getAnimalsSuccess', () => {
        it('Should replace animal list with new list', () => {
            let state;
            state = Reducer(state, getAnimalsSuccess(animals));
            expect(state).toEqual({
                
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

                animal: ['Panda', 'Kangaroo', 'Koala'],
                zoo: [],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('getZoosSuccess', () => {
        it('Should replace zoo list with new list', () => {
            let state;
            state = Reducer(state, getZoosSuccess(zoos));
            expect(state).toEqual({
                
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
                zoo: ['Bronx Zoo', 'SeaWorld San Diego', 'Melbourne Zoo'],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('getAllEncountersSuccess', () => {
        it('Should replace encounters list with new list', () => {
            let state;
            state = Reducer(state, getAllEncountersSuccess(encounters));
            expect(state).toEqual({
                
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

                encounters: [
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
                ],
                encounterType: 'All Animal'
            })
        })
    })

    describe('getEncountersByAnimalSuccess', () => {
        it('Should replace encounter list with new list and update encounterType', () => {
            let state;
            state = Reducer(state, getEncountersByAnimalSuccess(kangarooEncounters, 'Kangaroo'));
            expect(state).toEqual({
                
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

                encounters: [
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
            ],
                encounterType: 'Kangaroo'
            })
        })
    })

    describe('getEncountersByZooSuccess', () => {
        it('Should replace encounter list with new list and update encounterType', () => {
            let state;
            state = Reducer(state, getEncountersByZooSuccess(kangarooEncounters, 'Kangaroo'));
            expect(state).toEqual({
                
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

                encounters: [
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
            ],
                encounterType: 'Kangaroo'
            })
        })
    })

    describe('showSignupForm', () => {
        it('Should show/hide signup form appropriately', () => {
            let state;
            state = Reducer(state, showSignupForm(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: true,
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
            })
        })
    })

    describe('showSignupCheck', () => {
        it('Should show signup check', () => {
            let state;
            state = Reducer(state, showSignupCheck(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: true,

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
            })
        })
    })

    describe('showSigninForm', () => {
        it('Should show/hide Signin Form appropriately', () => {
            let state;
            state = Reducer(state, showSigninForm(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: false,

                showSigninForm: true,
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
            })
        })
    })

    describe('showSigninCheck', () => {
        it('Should show signin check', () => {
            let state;
            state = Reducer(state, showSigninCheck(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: false,

                showSigninForm: false,
                showSigninCheck: true,

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
            })
        })
    })

    describe('loggedInSuccess', () => {
        it('Should update authToken and isLoggedIn', () => {
            let state;
            state = Reducer(state, loggedInSuccess('eiwdji'));
            expect(state).toEqual({
                
                isLoggedIn: true,
                currentUser: '',
                authToken: 'eiwdji',

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
            })
        })
    })

    describe('updateCurrentUser', () => {
        it('Should update currentUser', () => {
            let state;
            state = Reducer(state, updateCurrentUser('user'));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: 'user',
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
            })
        })
    })

    describe('showAddEncounterForm', () => {
        it('Should show/hide Add Encounter Form appropriately', () => {
            let state;
            state = Reducer(state, showAddEncounterForm(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: false,

                showSigninForm: false,
                showSigninCheck: false,

                showAddEncounter: true,
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
            })
        })
    })

    describe('showAddEncounterCheck', () => {
        it('Should show Add Encounter Check', () => {
            let state;
            state = Reducer(state, showAddEncounterCheck(true));
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: false,

                showSigninForm: false,
                showSigninCheck: false,

                showAddEncounter: false,
                showAddEncounterCheck: true,
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
            })
        })
    })

    describe('hideAddEncounterCheck', () => {
        it('Should make showAddEncounterCheck and verifyAddEncounterCheck false', () => {
            let state;
            state = Reducer(state, hideAddEncounterCheck());
            expect(state).toEqual({
                
                isLoggedIn: false,
                currentUser: '',
                authToken: '',

                showSignupForm: false,
                showSignupCheck: false,

                showSigninForm: false,
                showSigninCheck: false,

                showAddEncounter: false,
                showAddEncounterCheck: false,
                verifyAddEncounterCheck: false,

                showEditEncounter: false,
                currentEditForm: 0,
                editEncounterFields: false,

                showDeleteEncounter: false,
                currentDeleteForm: 0,

                animal: [],
                zoo: [],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('addNewEncounterSuccess', () => {
        it('Should return showAddEncounter and verifyAddEncounterCheck to defaults', () => {
            let state;
            state = Reducer(state, addNewEncounterSuccess());
            expect(state).toEqual({
                
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
            })
        })
    })

    describe('showEditEncounterForm', () => {
        it('Should show/hide Edit Encounter Form appropriately', () => {
            let state;
            state = Reducer(state, showEditEncounterForm(true, 1));
            expect(state).toEqual({
                
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

                showEditEncounter: true,
                currentEditForm: 1,
                editEncounterFields: false,

                showDeleteEncounter: false,
                currentDeleteForm: 0,

                animal: [],
                zoo: [],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('showDeleteEncounterForm', () => {
        it('Should show/hide Delete Encounter Form appropriately', () => {
            let state;
            state = Reducer(state, showDeleteEncounterForm(true, 1));
            expect(state).toEqual({
                
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

                showDeleteEncounter: true,
                currentDeleteForm: 1,

                animal: [],
                zoo: [],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('EditEncounterSuccess', () => {
        it('Should return edit-related fields to defaults', () => {
            let state;
            state = Reducer(state, editEncounterSuccess());
            expect(state).toEqual({
                
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
            })
        })
    })

    describe('DeleteEncounterSuccess', () => {
        it('Should return delete-related fields to defaults', () => {
            let state;
            state = Reducer(state, deleteEncounterSuccess());
            expect(state).toEqual({
                
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
            })
        })
    })

    describe('EditEncounterFields', () => {
        it('Should show editEncounterFields', () => {
            let state;
            state = Reducer(state, editEncounterFields());
            expect(state).toEqual({
                
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
                editEncounterFields: true,

                showDeleteEncounter: false,
                currentDeleteForm: 0,

                animal: [],
                zoo: [],

                encounters: [],
                encounterType: 'All Animal'
            })
        })
    })

    describe('logout', () => {
        it('Should return fields related to user-specific information and logged-in-only fields to defaults', () => {
            let state;
            state = Reducer(state, logout());
            expect(state).toEqual({
                
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
            })
        })
    })
})