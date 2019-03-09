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